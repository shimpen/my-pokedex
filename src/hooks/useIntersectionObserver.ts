import React, { useState, useCallback, useEffect } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';

// TODO: 公式とTSのサンプルを用意してくれた方のおかげコードなので、理解に努める。
type Argument = {
  root?: React.RefObject<HTMLElement> | null;
  onIntersect: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<unknown, unknown>>;
  threshold?: number | number[];
  rootMargin?: string;
  enabled?: boolean;
};

type Response = {
  loadMoreRef: (node: Element) => void;
};

const useIntersectionObserver = ({
  root = null,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: Argument): Response => {
  const [target, setTarget] = useState<Element | null>(null);

  // コールバックref（呼び出し側はこれを無限スクロール検知用要素のrefに渡せばいい）
  const loadMoreRef = useCallback((node: Element) => {
    if (node !== null) {
      setTarget(node);
    }
  }, []);

  const newIntersectionObserver = useCallback(
    () =>
      new IntersectionObserver(
        (entries) =>
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          entries.forEach((entry) => entry.isIntersecting && onIntersect()),
        {
          root: root && root.current,
          rootMargin,
          threshold,
        },
      ),
    [root, onIntersect, threshold, rootMargin],
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const el = target;

    if (!el) {
      return;
    }
    const observer = newIntersectionObserver();

    observer.observe(el);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(el);
    };
  }, [enabled, target, newIntersectionObserver]);

  return { loadMoreRef };
};

export default useIntersectionObserver;
