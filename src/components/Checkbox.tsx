import React, { ChangeEventHandler, useState } from 'react';

export const Checkbox: React.FC<{
  initiallyChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  ariaLabel: string;
}> = ({ initiallyChecked, ariaLabel, onChange }) => {
  const [checked, setChecked] = useState(initiallyChecked);
  return (
    <input
      type="checkbox"
      aria-label={ariaLabel}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
        onChange(e);
      }}
    />
  );
};
