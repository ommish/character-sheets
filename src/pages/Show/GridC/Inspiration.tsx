import React from 'react';
import { Checkbox } from '../../../components';
import { getStoredCharacter, storeCharacter } from '../../../data/store';
import { useCharacter } from '../../../hooks/useCharacter';

export const Inspiration: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box flex align-center mb-1">
      <Checkbox
        initiallyChecked={character.inspiration}
        ariaLabel="inspiration"
        onChange={(e) => {
          const newCharacter = {
            ...getStoredCharacter(character.name),
          };
          newCharacter.inspiration = e.currentTarget.checked;
          storeCharacter(newCharacter);
        }}
      />
      <div className="ml-1 label-2">Inspiration</div>
    </div>
  );
};
