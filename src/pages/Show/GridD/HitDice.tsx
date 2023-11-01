import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';
import { Input } from '../../../components';
import { getStoredCharacter, storeCharacter } from '../../../data/store';

export const HitDice: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box mr-1 w-1-2 flex col justify-between">
      <div>
        <span className="text-light-2 mr-1">Max</span>
        <span className="value-2">{character.level}</span>
      </div>
      <div className="value-1 text-center">
        <Input
          type="number"
          min="0"
          aria-label="Hit Dice Count"
          initialValue={character.health.dice?.toString() ?? ''}
          onChange={(e) => {
            const newCharacter = {
              ...getStoredCharacter(character.name),
            };
            newCharacter.health.dice = e.currentTarget.value
              ? parseInt(e.currentTarget.value) || 0
              : undefined;
            storeCharacter(newCharacter);
          }}
        />

        {character.hitDie}
      </div>
      <div className="label-2 text-center mt-1">Hit Dice</div>
    </div>
  );
};
