import { merge } from 'lodash';
import React from 'react';
import { Input } from '../../../../components';
import { useCharacter } from '../../../../hooks/useCharacter';
import { useRawCharacter } from '../../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../../hooks/useStoreCharacter';
import { CURRENCIES } from '../../../../types';

export const Money: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();
  return (
    <div className="mr-1">
      {CURRENCIES.map((cr) => (
        <div key={cr} className="bordered-box mb-1 text-center">
          <span className="value-1">
            {
              <Input
                className="ml-1"
                type="number"
                value={character.money[cr]?.toString() ?? ' '}
                aria-label={`Money (${cr})`}
                onChange={(e) => {
                  const newCharacter = merge({}, rawCharacter);
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
