import React from 'react';
import { CheckCircleFill, Circle } from 'react-bootstrap-icons';
import { useCharacter } from '../../../hooks/useCharacter';

export const Inspiration: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box flex align-center mb-1">
      {character.inspiration ? <CheckCircleFill /> : <Circle />}
      <div className="ml-1 label-2">Inspiration</div>
    </div>
  );
};
