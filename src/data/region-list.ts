export const regionList = [
  'all',
  'kanto',
  'johto',
  'hoenn',
  'sinnoh',
  'unova',
  'kalos',
  'alola',
  'galar',
] as const;

export type Region = typeof regionList[number];
