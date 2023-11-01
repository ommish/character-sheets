import { startCase } from 'lodash';
import React from 'react';
import { CheckCircleFill, Circle } from 'react-bootstrap-icons';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { ABILITIES } from '../../../types';
import { useCharacter } from '../../../hooks/useCharacter';

export const SavingThrows: React.FC = () => {
  const character = useCharacter();
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
                <SignedNumber
                  number={
                    character.saves[ab].additionalBonus +
                    character.modifiers[ab] +
                    (character.saves[ab].proficient
                      ? character.proficiencyBonus
                      : 0)
                  }
                />
              </span>
            </div>
            <div>
              <span className="label-3 ml-1">{startCase(ab)}</span>
              <Info title={character.saves[ab].notes} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="label-1 mt-1">Saving Throws</div>
    </div>
  );
};
