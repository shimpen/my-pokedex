import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '../config';
import { isSpecies, Species } from '../../models/raw/species';

const getSpecies = async (url: string, options?: Options): Promise<Species> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(url, mergedOptions);
  const species = (await response.json()) as unknown[];

  if (!isSpecies(species)) {
    throw Error('API type error');
  }

  return species;
};

export default getSpecies;
