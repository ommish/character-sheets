import { startCase } from 'lodash';
import React from 'react';
import { SignedNumber } from '../../../components';
import { useDice } from '../../../hooks/useDice';
import { useCharacter } from '../../../hooks/useCharacter';
import { ABILITIES } from '../../../types';

export const AbilityScores: React.FC = () => {
  const character = useCharacter();
  const { submitRollRequest } = useDice();
  return (
    <div className="mr-2">
      {ABILITIES.map((ab) => (
        <div key={ab} className="bordered-box mb-1 text-center">
          <div className="mx-2">
            <button
              type="button"
              className="label-1 plain-button"
              onClick={() => {
                submitRollRequest({
                  label: `${startCase(ab)} check`,
                  onRoll: undefined,
                  dice: [
                    {
                      die: 'd20',
                      count: 1,
                      bonus: character.modifiers[ab],
                    },
                  ],
                });
              }}
            >
              {ab}
            </button>
          </div>
          <div className="my-1 value-1">
            <SignedNumber number={character.modifiers[ab]} />
          </div>
          <div className="border-t value-2">{character.abilityScores[ab]}</div>
        </div>
      ))}
    </div>
  );
};
