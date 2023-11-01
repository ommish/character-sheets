import React from 'react';
import { UsesTracker } from '../../../components';
import { getStoredCharacter, storeCharacter } from '../../../data/store';
import { useCharacter } from '../../../hooks/useCharacter';

const MAX = 3;

const toggleUse = (
  name: string,
  type: 'failures' | 'successes',
  used: boolean,
) => {
  const newCharacter = { ...getStoredCharacter(name) };
  const current = newCharacter.deathSaves[type];
  newCharacter.deathSaves[type] = used
    ? Math.max(0, current + 1)
    : Math.min(MAX, current - 1);
  storeCharacter(newCharacter);
};

export const DeathSaves: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box w-1-2 flex col justify-between">
      <div className="flex align-center justify-between mt-1">
        <span className="label-2 mr-1">Successes</span>
        <UsesTracker
          total={MAX}
          remaining={MAX - character.deathSaves.successes}
          toggleUse={(used) => {
            toggleUse(character.name, 'successes', used);
          }}
        />
      </div>
      <div className="flex align-center justify-between">
        <span className="label-2 mr-1">Failures</span>
        <UsesTracker
          total={MAX}
          remaining={MAX - character.deathSaves.failures}
          toggleUse={(used) => {
            toggleUse(character.name, 'failures', used);
          }}
        />
      </div>
      <div className="label-2 text-center mt-1">Death Saves</div>
    </div>
  );
};
