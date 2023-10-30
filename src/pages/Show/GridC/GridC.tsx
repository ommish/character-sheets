import { forwardRef } from 'react';
import { AbilityScores } from './AbilityScores';
import { Inspiration } from './Inspiration';
import { Proficiencies } from './Proficiencies';
import { ProficiencyBonus } from './ProficiencyBonus';
import { SavingThrows } from './SavingThrows';
import { Skills } from './Skills';
import { Notes } from './Notes';

export const GridC = forwardRef<HTMLElement, {}>((_, ref) => {
  return (
    <section className="grid-c" ref={ref}>
      <div className="scores-grid">
        <AbilityScores />
        <div>
          <Inspiration />
          <ProficiencyBonus />
          <SavingThrows />
          <Skills />
        </div>
      </div>
      <Proficiencies />
      <Notes />
    </section>
  );
});
