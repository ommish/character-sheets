import React from 'react';
import { Background } from './Background';
import { Klass } from './Klass';
import { Level } from './Level';
import { Race } from './Race';

export const GridB: React.FC = () => {
  return (
    <section className="grid-b flex">
      <Level />
      <Klass />
      <Race />
      <Background />
    </section>
  );
};
