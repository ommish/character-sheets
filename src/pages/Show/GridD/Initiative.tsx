import React from 'react';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../../hooks/useCharacter';

export const Initiative: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box text-center w-1-3">
      <div className="value-1">
        <SignedNumber
          number={
            character.modifiers.dex + character.initiative.additionalBonus
          }
        />
      </div>
      <div className="label-1 mt-1">
        Initiative
        <Info title={character.initiative.notes} />
      </div>
    </div>
  );
};
