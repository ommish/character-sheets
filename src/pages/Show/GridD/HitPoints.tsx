import { merge } from 'lodash';
import React from 'react';
import { Input } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { useRawCharacter } from '../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../hooks/useStoreCharacter';

export const HitPoints: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();
  return (
    <div className="bordered-box mt-1">
      <div>
        <span className="text-light-2 mr-1">Hit Point Maximum</span>
        {character.health.max}
      </div>
      <div className="value-1 text-center pt-1">
        <Input
          type="number"
          value={character.health.current?.toString() ?? ''}
          aria-label="Current Health"
          onChange={(e) => {
            const newCharacter = merge({}, rawCharacter);
            newCharacter.health.current = e.currentTarget.value
              ? parseInt(e.currentTarget.value) || 0
              : undefined;
            storeCharacter(newCharacter);
          }}
          min={0}
          max={character.health.max}
        />
      </div>
      <div className="label-1 mt-0-5">Current Hit Points</div>
    </div>
  );
};
