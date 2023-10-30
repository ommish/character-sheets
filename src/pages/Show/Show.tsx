import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCharacters } from '../../hooks/useCharacters';
import { Who } from '../Who';
import { GridA } from './GridA';
import { GridB } from './GridB';
import { GridC } from './GridC';
import { GridD } from './GridD';
import { GridE } from './GridE';
import { GridF } from './GridF';
import './Show.scss';

export const Show: React.FC = () => {
  const col1 = useRef<HTMLElement>(null);
  const col2 = useRef<HTMLElement>(null);
  const col3 = useRef<HTMLElement>(null);

  const { name } = useParams();
  const character = useCharacters().find((ch) => ch.name === name);
  if (!character) {
    return <Who />;
  }
  return (
    <main className="character-show">
      <Link to={`/${name}/edit`} className="edit">
        Edit
      </Link>
      <div
        className="patterns-left"
        style={{ backgroundImage: `url('${character.pattern}')` }}
      ></div>
      <GridA />
      <GridB />
      <GridC ref={col1} />
      <GridD ref={col2} />
      <GridE ref={col3} />
      <div className="pagebreak" />
      <GridF />
      <div
        className="patterns-right"
        style={{ backgroundImage: `url('${character.pattern}')` }}
      ></div>
    </main>
  );
};
