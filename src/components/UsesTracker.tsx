import React from 'react';
import { newArray } from '../formUtils/newArray';
import { UseCircle } from './UseCircle';

export const UsesTracker: React.FC<{
  total: number;
  remaining: number;
  toggleUse: (use: boolean) => void;
  size?: number;
}> = ({ total, remaining, toggleUse, size }) => {
  const uses = newArray(total).map((_, i) =>
    total - i > remaining ? true : false,
  );
  return (
    <div className="uses-tracker">
      {uses.map((used, i) => (
        <UseCircle
          key={i}
          used={used}
          size={size}
          onClick={() => {
            const newUsed = [...uses];
            newUsed[i] = !newUsed[i];
            toggleUse(newUsed[i]);
          }}
        />
      ))}
    </div>
  );
};
