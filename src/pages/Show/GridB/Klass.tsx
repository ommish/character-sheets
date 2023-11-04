import React from 'react';
import { useCharacter } from '../../../hooks/useCharacter';

export const Klass: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="w-3-8">
      <div className="border-b value-1">
        {character.klass} {character.subKlass && `(${character.subKlass})`}
      </div>
      <div className="label-2">Class</div>
    </div>
  );
};
