import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';
import { Input } from '../../../components';
import { getStoredCharacter, storeCharacter } from '../../../data/store';

export const HitPoints: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box mt-1">
      <div>
        <span className="text-light-2 mr-1">Hit Point Maximum</span>
        {character.health.max}
      </div>
      <div className="value-1 text-center pt-1">
        <Input
          type="number"
          initialValue={character.health.current?.toString() ?? ''}
          aria-label="Current Health"
          onChange={(e) => {
            const newCharacter = {
              ...getStoredCharacter(character.name),
            };
            newCharacter.health.current = e.currentTarget.value
              ? parseInt(e.currentTarget.value) || 0
              : undefined;
            storeCharacter(newCharacter);
          }}
        />
      </div>
      <div className="label-1 mt-1-5">Current Hit Points</div>
    </div>
  );
};
