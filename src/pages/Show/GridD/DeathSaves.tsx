import React from 'react';
import { CheckCircleFill, Circle } from 'react-bootstrap-icons';
import { useCharacter } from '../../../hooks/useCharacter';

const markers = (checkCount: number) =>
  [0, 1, 2].map((i) =>
    checkCount <= i ? (
      <Circle key={i.toString()} className="mr-1" />
    ) : (
      <CheckCircleFill key={i.toString()} className="mr-1" />
    ),
  );

export const DeathSaves: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box w-1-2 flex col justify-between">
      <div className="flex align-center justify-between mt-1">
        <span className="label-2 mr-1">Successes</span>
        <div className="flex">{markers(character.deathSaves.successes)}</div>
      </div>
      <div className="flex align-center justify-between">
        <span className="label-2 mr-1">Failures</span>
        <div className="flex">{markers(character.deathSaves.failures)}</div>
      </div>
      <div className="label-2 text-center mt-1">Death Saves</div>
    </div>
  );
};
