import React from 'react';
import { Campaign } from './Campaign';
import { Name } from './Name';

export const GridA: React.FC = () => {
  return (
    <section className="grid-a">
      <Campaign />
      <Name />
    </section>
  );
};
