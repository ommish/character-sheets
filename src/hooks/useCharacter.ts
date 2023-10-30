import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { digest } from '../data/digest';
import { DigestedCharacter } from '../types';
import { useCharacters } from './useCharacters';

export const useCharacter = (): DigestedCharacter => {
  const { name } = useParams();
  const character = useCharacters().find((ch) => ch.name === name);
  const digested = useMemo(
    () => (character ? digest(character) : null),
    [character],
  );
  if (!digested) throw new Error(`Character ${name} not found`);
  return digested;
};
