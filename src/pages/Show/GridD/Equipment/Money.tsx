import React from 'react';
import { CURRENCIES } from '../../../../types';
import { useCharacter } from '../../../useCharacter';

export const Money: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="mr-1">
      {CURRENCIES.map((cr) => (
        <div key={cr} className="bordered-box mb-1 text-center">
          <span className="value-1">{character.money[cr] || ' '}</span>
          <div className="text-light-2">{cr}</div>
        </div>
      ))}
    </div>
  );
};
