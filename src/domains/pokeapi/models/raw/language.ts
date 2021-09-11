export type Language = {
  name: string;
  url: string;
};

export const isLanguage = (arg: unknown): arg is Language => {
  const l = arg as Language;

  return typeof l?.name === 'string' && typeof l?.url === 'string';
};
