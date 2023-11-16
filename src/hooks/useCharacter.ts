import { useMemo } from 'react';
import { digest } from '../data/digest';
import { DigestedCharacter } from '../types';
import { useRawCharacter } from './useRawCharacter';

export const useCharacter = (): DigestedCharacter => {
  const character = useRawCharacter();
  const digested = useMemo(() => digest(character), [character]);
  return digested;
};
