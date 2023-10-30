import React from 'react';
import { SignedNumber } from '../../../components';
import { ABILITIES } from '../../../types';
import { useCharacter } from '../../useCharacter';

export const AbilityScores: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="mr-2">
      {ABILITIES.map((ab) => (
        <div key={ab} className="bordered-box mb-1 text-center">
          <div className="label-1 mx-2">{ab}</div>
          <div className="my-1 value-1">
            <SignedNumber number={character.modifiers[ab]} />
          </div>
          <div className="border-t value-2">{character.abilityScores[ab]}</div>
        </div>
      ))}
    </div>
  );
};
