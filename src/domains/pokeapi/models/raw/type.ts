import { Name, isName } from './name';

export type Type = {
  name: string;
  names: Name[];
};

const isType = (arg: unknown): arg is Type => {
  const t = arg as Type;

  return typeof t?.name === 'string' && !t?.names.some((name) => !isName(name));
};

export { isType };
