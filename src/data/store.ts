import { Character } from '../types';

const NAME_KEY = 'characters' as const;

const CHARACTER_KEY = (name: string) => `characters.${name}`;

export const getStoredCharacterNames = () => {
  return JSON.parse(localStorage.getItem(NAME_KEY) || '[]') as string[];
};

export const getStoredCharacters = () => {
  const names = getStoredCharacterNames();
  return names.map((name) =>
    JSON.parse(localStorage.getItem(CHARACTER_KEY(name))!),
  ) as Character[];
};

export const storeCharacter = (character: Character) => {
  const storedCharacterNames = getStoredCharacterNames();
  if (!storedCharacterNames.includes(character.name)) {
    storedCharacterNames.push(character.name);
  }
  localStorage.setItem(NAME_KEY, JSON.stringify(storedCharacterNames));
  localStorage.setItem(
    CHARACTER_KEY(character.name),
    JSON.stringify(character),
  );
};

export const deleteCharacter = (name: string) => {
  let newNames = getStoredCharacterNames();
  newNames = newNames.filter((storedName) => storedName !== name);
  localStorage.removeItem(CHARACTER_KEY(name));
  localStorage.setItem(NAME_KEY, JSON.stringify(newNames));
};
