import React from 'react';
import { Info } from '../../../components';
import { PROFICIENCIES } from '../../../types';
import { useCharacter } from '../../useCharacter';

export const Proficiencies: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box">
      {PROFICIENCIES.map((prType) => (
        <div key={prType}>
          <span className="label-2">{prType}:</span>{' '}
          <span className="value-2">
            {character.proficiencies[prType].map((pr, i) => (
              <span key={pr.name}>
                {pr.name}
                <Info title={pr.notes} />
                {i < character.proficiencies[prType].length - 1 && ', '}
              </span>
            ))}
          </span>
        </div>
      ))}
      <div className="label-1 mt-1">Other Proficiencies & Languages</div>
    </div>
  );
};
