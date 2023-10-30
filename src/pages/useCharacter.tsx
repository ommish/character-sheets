import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { digest } from '../data/digest';
import { list } from '../data/list';
import { DigestedCharacter } from '../types';

export const useCharacter = (): DigestedCharacter => {
  const { name } = useParams();
  const character = list.find((ch) => ch.name === name);
  if (!character) throw new Error(`Character ${name} not found`);
  return useMemo(() => digest(character), []);
};
