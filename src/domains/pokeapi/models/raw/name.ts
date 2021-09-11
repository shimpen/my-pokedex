import { Language, isLanguage } from './language';

export type Name = {
  name: string;
  language: Language;
};

export const isName = (arg: unknown): arg is Name => {
  const n = arg as Name;

  return typeof n?.name === 'string' && isLanguage(n?.language);
};
