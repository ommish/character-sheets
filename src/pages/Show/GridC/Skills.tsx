import { startCase } from 'lodash';
import React from 'react';
import { CheckCircleFill, Circle } from 'react-bootstrap-icons';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { DigestedCharacter, SKILLS, Skill } from '../../../types';
import { useCharacter } from '../../../hooks/useCharacter';
import { useDice } from '../../../hooks/useDice';

const getBonus = (character: DigestedCharacter, skill: Skill) =>
  character.skills[skill].additionalBonus +
  character.modifiers[character.skills[skill].ability] +
  (character.skills[skill].proficient ? character.proficiencyBonus : 0);

export const Skills: React.FC = () => {
  const character = useCharacter();
  const { submitRollRequest } = useDice();
  return (
    <div className="bordered-box my-1">
      <div className="proficiencies-grid">
        {SKILLS.map((sk) => (
          <React.Fragment key={sk}>
            <div className="flex align-center">
              {character.skills[sk].proficient ? (
                <CheckCircleFill className="mr-1" />
              ) : (
                <Circle className="mr-1" />
              )}
              <span className="border-b value-2 inline-block px-1">
                <SignedNumber number={getBonus(character, sk)} />
              </span>
            </div>
            <div>
              <span className="label-3 mx-1">
                <button
                  type="button"
                  className="plain-button"
                  onClick={() => {
                    submitRollRequest({
                      label: `${startCase(sk)} check`,
                      onRoll: undefined,
                      dice: [
                        {
                          die: 'd20',
                          count: 1,
                          bonus: getBonus(character, sk),
                        },
                      ],
                    });
                  }}
                >
                  {startCase(sk)}
                </button>
              </span>
              <span className="text-light-2">
                ({character.skills[sk].ability})
              </span>
              <Info title={character.skills[sk].notes} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="label-1 mt-1">Skills</div>
    </div>
  );
};
