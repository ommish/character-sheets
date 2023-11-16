import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';

export const Input: React.FC<
  {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ value, onChange, className = '', ...rest }) => {
  return (
    <input
      {...rest}
      className={className + ' input'}
      value={value}
      onChange={onChange}
    />
  );
};
