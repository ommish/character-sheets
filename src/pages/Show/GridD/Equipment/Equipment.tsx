import React from 'react';
import { Items } from './Items';
import { Money } from './Money';

export const Equipment: React.FC = () => {
  return (
    <div className="bordered-box mt-1">
      <div className="flex">
        <Money />
        <Items />
      </div>
      <div className="label-1 mt-1">Equipment</div>
    </div>
  );
};
