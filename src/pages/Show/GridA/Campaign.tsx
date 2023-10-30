import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';

export const Campaign: React.FC = () => {
  const character = useCharacter();
  return <div className="text-light-2">{character.campaign}</div>;
};
