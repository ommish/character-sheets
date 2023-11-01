import { startCase } from 'lodash';
import React from 'react';
import { CheckCircleFill, Circle } from 'react-bootstrap-icons';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { SKILLS } from '../../../types';
import { useCharacter } from '../../../hooks/useCharacter';

export const Skills: React.FC = () => {
  const character = useCharacter();
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
                <SignedNumber
                  number={
                    character.skills[sk].additionalBonus +
                    character.modifiers[character.skills[sk].ability] +
                    (character.skills[sk].proficient
                      ? character.proficiencyBonus
                      : 0)
                  }
                />
              </span>
            </div>
            <div>
              <span className="label-3 mx-1">{startCase(sk)}</span>
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
