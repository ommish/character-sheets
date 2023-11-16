import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../types';
import { useCharacters } from './useCharacters';

export const useRawCharacter = (): Character => {
  const { name } = useParams();
  const characters = useCharacters();
  const character = useMemo(
    () => characters.find((ch) => ch.name === name),
    [name, characters],
  );
  if (!character) throw new Error(`Character ${name} not found`);
  return character;
};
