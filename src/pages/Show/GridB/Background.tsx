import React from 'react';
import { useCharacter } from '../../useCharacter';

export const Background: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="w-1-4">
      <div className="border-b value-1">{character.background}</div>
      <div className="label-2">Background</div>
    </div>
  );
};
