import { Language, isLanguage } from './language';
import { Name, isName } from './name';

export type FlavorText = {
  flavorText: string;
  language: Language;
};

export type Genus = {
  genus: string;
  language: Language;
};

export type Species = {
  flavorTextEntries: FlavorText[];
  genera: Genus[];
  names: Name[];
};

const isFlavorText = (arg: unknown): arg is FlavorText => {
  const f = arg as FlavorText;

  return typeof f?.flavorText === 'string' && isLanguage(f?.language);
};

const isGenus = (arg: unknown): arg is Genus => {
  const g = arg as Genus;

  return typeof g?.genus === 'string' && isLanguage(g?.language);
};

const isSpecies = (arg: unknown): arg is Species => {
  const s = arg as Species;

  return (
    !s?.flavorTextEntries.some((text) => !isFlavorText(text)) &&
    !s?.genera.some((genus) => !isGenus(genus)) &&
    !s?.names.some((name) => !isName(name))
  );
};

export { isSpecies };
