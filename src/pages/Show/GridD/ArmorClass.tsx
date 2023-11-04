import React from 'react';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../../hooks/useCharacter';

export const ArmorClass: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box text-center mr-1 w-1-3">
      <div className="value-1">{character.armorClass.ac}</div>
      <div className="label-1 mt-0-5">
        Armor Class
        <Info title={character.armorClass.notes} />
      </div>
    </div>
  );
};
