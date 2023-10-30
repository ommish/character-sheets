import React from 'react';
import { useCharacter } from '../../useCharacter';

export const HitDice: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box mr-1 w-1-2 flex col justify-between">
      <div>
        <span className="text-light-2 mr-1">Total</span>
        <span className="value-2">{character.level}</span>
      </div>
      <div className="value-1 text-center">
        {character.health.dice}
        {character.hitDie}
      </div>
      <div className="label-2 text-center mt-1">Hit Dice</div>
    </div>
  );
};
