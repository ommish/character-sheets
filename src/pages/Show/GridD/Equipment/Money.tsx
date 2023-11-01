import React from 'react';
import { CURRENCIES } from '../../../../types';
import { useCharacter } from '../../../../hooks/useCharacter';
import { Input } from '../../../../components';
import { getStoredCharacter, storeCharacter } from '../../../../data/store';

export const Money: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="mr-1">
      {CURRENCIES.map((cr) => (
        <div key={cr} className="bordered-box mb-1 text-center">
          <span className="value-1">
            {
              <Input
                className="ml-1"
                type="number"
                initialValue={character.money[cr]?.toString() ?? ' '}
                aria-label={`Money (${cr})`}
                onChange={(e) => {
                  const newCharacter = {
                    ...getStoredCharacter(character.name),
                  };
                  newCharacter.money[cr] = e.currentTarget.value
                    ? parseInt(e.currentTarget.value) || 0
                    : null;
                  storeCharacter(newCharacter);
                }}
              />
            }
          </span>
          <div className="text-light-2">{cr}</div>
        </div>
      ))}
    </div>
  );
};
