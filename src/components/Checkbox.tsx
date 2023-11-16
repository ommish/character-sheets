import React, { ChangeEventHandler } from 'react';

export const Checkbox: React.FC<{
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  ariaLabel: string;
}> = ({ checked, ariaLabel, onChange }) => {
  return (
    <input
      type="checkbox"
      aria-label={ariaLabel}
      checked={checked}
      onChange={onChange}
    />
  );
};
