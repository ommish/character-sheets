import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';

export const Race: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="w-1-4">
      <div className="border-b value-1">{character.race}</div>
      <div className="label-2">Race</div>
    </div>
  );
};
