import {
  VFC,
  // FormEvent,
  Suspense,
  SuspenseList,
  useRef,
  useState,
  useTransition,
} from 'react';
import { Divider, Menu } from 'semantic-ui-react';
// import capitalize from 'lodash/capitalize';

import capitalize from 'lodash/capitalize';
import ErrorBoundary from '../../ErrorBoundary';
import Spinner from '../molecules/Spinner';
import PokemonList from '../../containers/oraganisms/PokemonList';
import './Pokemons.css';
import { Region, regionList as RegionList } from '../../data/region-list';
import regionUrlMap, { Url } from '../../domains/pokeapi/data/region-url-list';

type Props = {
  regionList: typeof RegionList;
  prefetch?: (url: Url) => void;
};

const Pokemons: VFC<Props> = ({ regionList, prefetch = () => undefined }) => {
  const [regionName, setRegionName] = useState('');
  // const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const ebKey = useRef(0);

  const menuItems = regionList.map((region) => ({
    key: region,
    name: capitalize(region),
    onClick: () => {
      // setInput('');

      if (regionName) {
        startTransition(() => setRegionName(region));
      } else {
        setRegionName(region);
      }
    },
    onMouseOver: () => prefetch(regionUrlMap[region]),
    active: region === regionName,
  }));

  return (
    <>
      <header className="app-header">
        <h1>PokeDex</h1>
      </header>
      <Menu items={menuItems} text />
      <Divider />
      <div className={isPending ? 'loading' : ''}>
        <ErrorBoundary
          statusMessages={{
            404: `${regionName}というリージョンがが見つかりません`,
          }}
          onError={() => {
            ebKey.current += 1;
          }}
          key={ebKey.current}
        >
          <SuspenseList>
            <Suspense fallback={<Spinner size="large" />}>
              <PokemonList
                url={
                  regionName
                    ? regionUrlMap[regionName as Region]
                    : regionUrlMap.all
                }
              />
            </Suspense>
          </SuspenseList>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Pokemons;