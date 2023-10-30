import { forwardRef } from 'react';
import { Features } from './Features';
import { StatusEffects } from './StatusEffects';

export const GridE = forwardRef<HTMLElement, {}>((_, ref) => {
  return (
    <section className="grid-e" ref={ref}>
      <StatusEffects />
      <Features />
    </section>
  );
});
