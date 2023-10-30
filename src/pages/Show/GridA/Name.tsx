import React from 'react';
import { useCharacter } from '../../useCharacter';

export const Name: React.FC = () => {
  const character = useCharacter();
  return <h2>{character.name}</h2>;
};
