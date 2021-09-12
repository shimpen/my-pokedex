import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '../config';
import { isType, Type } from '../../models/raw/type';

const getType = async (url: string, options?: Options): Promise<Type> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(url, mergedOptions);
  const type = (await response.json()) as unknown[];

  if (!isType(type)) {
    throw Error('API type error');
  }

  return type;
};

export default getType;
