import React from 'react';
import { SignedNumber } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';

export const SpellCasting: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="flex mt-4 mb-2">
      <div className="w-1-8">
        <div className="border-b value-1">{character.spellSaveDC}</div>
        <div className="label-2">Spell Save DC</div>
      </div>
      <div className="w-1-8">
        <div className="border-b value-1">
          <SignedNumber number={character.spellAttackBonus} />
        </div>
        <div className="label-2">Spell Attack Bonus</div>
      </div>
    </div>
  );
};
