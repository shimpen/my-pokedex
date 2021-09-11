import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '../config';
import { isType, Type } from '../../models/raw/type';

const getType = async (name: string, options?: Options): Promise<Type> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(
    `https://pokeapi.co/api/v2/type/${name}`,
    mergedOptions,
  );
  const type = (await response.json()) as unknown[];

  if (!isType(type)) {
    throw Error('API type error');
  }

  return type;
};

export default getType;
