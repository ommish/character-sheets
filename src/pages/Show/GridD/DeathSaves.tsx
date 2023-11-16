import { merge } from 'lodash';
import React from 'react';
import { UsesTracker } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { useDice } from '../../../hooks/useDice';
import { useRawCharacter } from '../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../hooks/useStoreCharacter';

const MAX = 3;

export const DeathSaves: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();
  const { submitRollRequest } = useDice();

  const toggleUse = (type: 'failures' | 'successes', used: boolean) => {
    const newCharacter = merge({}, rawCharacter);
    const current = newCharacter.deathSaves[type];
    newCharacter.deathSaves[type] = used
      ? Math.max(0, current + 1)
      : Math.min(MAX, current - 1);
    storeCharacter(newCharacter);
  };

  return (
    <div className="bordered-box w-1-2 flex col justify-between">
      <div className="flex align-center justify-between mt-1">
        <span className="label-2 mr-1">Successes</span>
        <UsesTracker
          total={MAX}
          remaining={MAX - character.deathSaves.successes}
          toggleUse={(used) => {
            toggleUse('successes', used);
          }}
        />
      </div>
      <div className="flex align-center justify-between">
        <span className="label-2 mr-1">Failures</span>
        <UsesTracker
          total={MAX}
          remaining={MAX - character.deathSaves.failures}
          toggleUse={(used) => {
            toggleUse('failures', used);
          }}
        />
      </div>
      <div className="label-2 text-center mt-1">
        <button
          type="button"
          className="label-1 plain-button"
          disabled={[
            character.deathSaves.failures,
            character.deathSaves.successes,
          ].includes(3)}
          onClick={() => {
            submitRollRequest({
              label: 'Death save',
              onRoll: (roll) => {
                toggleUse(roll < 10 ? 'failures' : 'successes', true);
              },
              dice: [
                {
                  die: 'd20',
                  count: 1,
                  bonus: 0,
                },
              ],
            });
          }}
        >
          Death Saves
        </button>
      </div>
    </div>
  );
};
