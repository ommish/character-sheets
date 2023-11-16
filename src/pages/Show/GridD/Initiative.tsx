import React from 'react';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../../hooks/useCharacter';
import { DigestedCharacter } from '../../../types';
import { useDice } from '../../../hooks/useDice';

const getBonus = (character: DigestedCharacter) =>
  character.modifiers.dex + (character.initiative.additionalBonus ?? 0);

export const Initiative: React.FC = () => {
  const character = useCharacter();
  const { submitRollRequest } = useDice();
  return (
    <div className="bordered-box text-center w-1-3">
      <div className="value-1">
        <SignedNumber number={getBonus(character)} />
      </div>
      <div className="label-1 mt-0-5">
        <button
          type="button"
          className="label-1 plain-button"
          onClick={() => {
            submitRollRequest({
              label: 'Initiative',
              onRoll: undefined,
              dice: [
                {
                  die: 'd20',
                  count: 1,
                  bonus: getBonus(character),
                },
              ],
            });
          }}
        >
          Initiative
        </button>
        <Info title={character.initiative.notes} />
      </div>
    </div>
  );
};
