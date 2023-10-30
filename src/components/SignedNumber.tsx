import React from 'react';

export const SignedNumber: React.FC<{ number: number }> = ({ number }) => {
  return <>{number >= 0 ? `+${number}` : number}</>;
};
