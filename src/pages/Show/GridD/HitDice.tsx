import { merge } from 'lodash';
import React from 'react';
import { Input } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { useDice } from '../../../hooks/useDice';
import { useRawCharacter } from '../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../hooks/useStoreCharacter';
import { DigestedCharacter } from '../../../types';

const getBonus = (character: DigestedCharacter) => character.modifiers.con;

export const HitDice: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();
  const { submitRollRequest } = useDice();

  return (
    <div className="bordered-box mr-1 w-1-2 flex col justify-between">
      <div>
        <span className="text-light-2 mr-1">Max</span>
        <span className="value-2">{character.level}</span>
      </div>
      <div className="value-1 text-center">
        <Input
          type="number"
          aria-label="Hit Dice Count"
          value={character.health.dice?.toString() ?? ''}
          onChange={(e) => {
            const newCharacter = merge({}, rawCharacter);
            newCharacter.health.dice = e.currentTarget.value
              ? parseInt(e.currentTarget.value) || 0
              : undefined;
            storeCharacter(newCharacter);
          }}
          min={0}
          max={character.level}
        />
        {character.hitDie}
      </div>
      <div className="label-2 text-center mt-1">
        <button
          type="button"
          className="label-1 plain-button"
          disabled={!character.health.dice}
          onClick={() => {
            submitRollRequest({
              label: 'Hit die',
              onRoll: undefined,
              dice: [
                {
                  die: character.hitDie,
                  count: 1,
                  bonus: getBonus(character),
                },
              ],
            });
          }}
        >
          Hit Dice
        </button>
      </div>
    </div>
  );
};
