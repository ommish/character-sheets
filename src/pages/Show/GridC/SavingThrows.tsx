import { startCase } from 'lodash';
import React from 'react';
import { CheckCircleFill, Circle } from 'react-bootstrap-icons';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { useDice } from '../../../hooks/useDice';
import { useCharacter } from '../../../hooks/useCharacter';
import { ABILITIES, Ability, DigestedCharacter } from '../../../types';

const getBonus = (character: DigestedCharacter, ability: Ability) =>
  character.saves[ability].additionalBonus +
  character.modifiers[ability] +
  (character.saves[ability].proficient ? character.proficiencyBonus : 0);

export const SavingThrows: React.FC = () => {
  const character = useCharacter();
  const { submitRollRequest } = useDice();
  return (
    <div className="bordered-box my-1">
      <div className="proficiencies-grid">
        {ABILITIES.map((ab) => (
          <React.Fragment key={ab}>
            <div className="flex align-center">
              {character.saves[ab].proficient ? (
                <CheckCircleFill className="mr-1" />
              ) : (
                <Circle className="mr-1" />
              )}
              <span className="border-b value-2 inline-block px-1">
                <SignedNumber number={getBonus(character, ab)} />
              </span>
            </div>
            <div>
              <button
                type="button"
                className="plain-button"
                onClick={() => {
                  submitRollRequest({
                    label: `${startCase(ab)} save`,
                    onRoll: undefined,
                    dice: [
                      {
                        die: 'd20',
                        count: 1,
                        bonus: getBonus(character, ab),
                      },
                    ],
                  });
                }}
              >
                <span className="label-3 ml-1">{startCase(ab)}</span>
              </button>
              <Info title={character.saves[ab].notes} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="label-1 mt-1">Saving Throws</div>
    </div>
  );
};
