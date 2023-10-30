import { forwardRef } from 'react';
import { ArmorClass } from './ArmorClass';
import { Attacks } from './Attacks';
import { DeathSaves } from './DeathSaves';
import { Equipment } from './Equipment';
import { HitDice } from './HitDice';
import { HitPoints } from './HitPoints';
import { Initiative } from './Initiative';
import { Speed } from './Speed';
import { TempHitPoints } from './TempHitPoints';

export const GridD = forwardRef<HTMLElement, {}>((_, ref) => {
  return (
    <section className="grid-d" ref={ref}>
      <div className="flex">
        <ArmorClass />
        <Initiative />
        <Speed />
      </div>
      <HitPoints />
      <TempHitPoints />
      <div className="flex my-1">
        <HitDice />
        <DeathSaves />
      </div>
      <Attacks />
      <Equipment />
    </section>
  );
});
