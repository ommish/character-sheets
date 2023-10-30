import React from 'react';
import { useCharacter } from '../../useCharacter';

export const Level: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="w-1-8">
      <div className="border-b value-1">Lvl {character.level}</div>
      <div className="label-2">Level</div>
    </div>
  );
};
