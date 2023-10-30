import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';

export const HitPoints: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box mt-1">
      <div>
        <span className="text-light-2 mr-1">Hit Point Maximum</span>
        {character.health.max}
      </div>
      <div className="value-1 text-center pt-2">{character.health.current}</div>
      <div className="label-1 mt-1">Current Hit Points</div>
    </div>
  );
};
