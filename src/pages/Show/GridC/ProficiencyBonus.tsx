import React from 'react';
import { SignedNumber } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';

export const ProficiencyBonus: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box flex my-1 align-center">
      <span className="value-2">
        <SignedNumber number={character.proficiencyBonus} />
      </span>
      <div className="ml-1 label-2">Proficiency Bonus</div>
    </div>
  );
};
