import { Region } from '../../../data/region-list';

export type Url = `https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${number}`;

export type RegionUrlMap = { [key in Region]: Url };

const baseUrl = `https://pokeapi.co/api/v2/pokemon?`;

const regionUrlMap: RegionUrlMap = {
  all: `${baseUrl}limit=20&offset=0`,
  kanto: `${baseUrl}limit=20&offset=0`,
  johto: `${baseUrl}limit=20&offset=151`,
  hoenn: `${baseUrl}limit=20&offset=251`,
  sinnoh: `${baseUrl}limit=20&offset=386`,
  unova: `${baseUrl}limit=20&offset=493`,
  kalos: `${baseUrl}limit=20&offset=649`,
  alola: `${baseUrl}limit=20&offset=721`,
  galar: `${baseUrl}limit=20&offset=809`,
} as const;

// Fixme: add see more function and remove under comments that get all each region.
// const regionUrlMap: RegionUrlMap = {
//   all: `${baseUrl}limit=100&offset=0`,
//   kanto: `${baseUrl}limit=151&offset=0`,
//   johto: `${baseUrl}limit=100&offset=151`,
//   hoenn: `${baseUrl}limit=135&offset=251`,
//   sinnoh: `${baseUrl}limit=97&offset=386`,
//   unova: `${baseUrl}limit=156&offset=493`,
//   kalos: `${baseUrl}limit=72&offset=649`,
//   alola: `${baseUrl}limit=88&offset=721`,
//   galar: `${baseUrl}limit=89&offset=809`,
// } as const;

export default regionUrlMap;
