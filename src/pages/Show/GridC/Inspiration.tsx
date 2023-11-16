import React from 'react';
import { Checkbox } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { useRawCharacter } from '../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../hooks/useStoreCharacter';

export const Inspiration: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();
  return (
    <div className="bordered-box flex align-center mb-1">
      <Checkbox
        checked={character.inspiration}
        ariaLabel="inspiration"
        onChange={(e) => {
          const newCharacter = {
            ...rawCharacter,
          };
          newCharacter.inspiration = e.currentTarget.checked;
          storeCharacter(newCharacter);
        }}
      />
      <div className="ml-1 label-2">Inspiration</div>
    </div>
  );
};
