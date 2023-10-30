import React from 'react';
import { Info } from '../../../../components/Info';
import { useCharacter } from '../../../../hooks/useCharacter';

export const Items: React.FC = () => {
  const character = useCharacter();
  return (
    <ul>
      {character.equipment.map((item, i) => (
        <li key={`${item.name}_${i.toString()}`} className="value-2">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ) : (
            item.name
          )}
          <Info title={item.notes} />
        </li>
      ))}
    </ul>
  );
};
