import React from 'react';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../../hooks/useCharacter';

export const Speed: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box text-center ml-1 w-1-3">
      <div className="value-1">{character.speed.feet}</div>
      <div className="label-1 mt-0-5">
        Speed
        <Info title={character.speed.notes} />
      </div>
    </div>
  );
};
