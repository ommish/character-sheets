import React from 'react';
import { Input } from '../../../components';
import { getStoredCharacter, storeCharacter } from '../../../data/store';
import { useCharacter } from '../../../hooks/useCharacter';

export const TempHitPoints: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box mb-1">
      <div className="value-1 text-center">
        <Input
          type="number"
          initialValue={
            character.health.temp ? character.health.temp.toString() : ''
          }
          min={0}
          aria-label="Current Health"
          onChange={(e) => {
            const newCharacter = {
              ...getStoredCharacter(character.name),
            };
            newCharacter.health.temp = e.currentTarget.value
              ? parseInt(e.currentTarget.value) || 0
              : 0;
            storeCharacter(newCharacter);
          }}
        />
      </div>
      <div className="label-1 mt-0-5">Temporary Hit Points</div>
    </div>
  );
};
