import { indexOf } from 'lodash';
import React from 'react';
import { STATUS_EFFECTS } from '../../../types';
import { useCharacter } from '../../../hooks/useCharacter';

export const StatusEffects: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="status-effects bordered-box">
      <ul>
        {character.statusEffects.map((ef) => (
          <li key={ef} className="value-2">
            <a
              href={`https://roll20.net/compendium/dnd5e/Conditions#toc_${
                indexOf(STATUS_EFFECTS, ef) + 1
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {ef}
            </a>
          </li>
        ))}
      </ul>
      <div className="label-1 mt-1">Status Effects</div>
    </div>
  );
};
