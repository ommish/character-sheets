import React from 'react';
import { SignedNumber } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';

export const TempHitPoints: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box mb-1">
      <div className="value-1 text-center">
        {character.health.temp > 0 && (
          <span>
            <SignedNumber number={character.health.temp} />
          </span>
        )}
      </div>
      <div className="label-1 mt-1 pt-2">Temporary Hit Points</div>
    </div>
  );
};
