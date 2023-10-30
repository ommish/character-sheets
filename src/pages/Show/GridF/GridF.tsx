import React from 'react';
import { useCharacter } from '../../useCharacter';
import './GridF.scss';
import { SpellCasting } from './SpellCasting';
import { Spells } from './Spells';

export const GridF: React.FC = () => {
  const character = useCharacter();
  if (!character.showSpells) return null;
  return (
    <section className="grid-f">
      <SpellCasting />
      <Spells />
    </section>
  );
};
