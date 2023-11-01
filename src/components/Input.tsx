import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  useState,
} from 'react';

export const Input: React.FC<
  {
    initialValue: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ initialValue, onChange, className = '', ...rest }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      {...rest}
      className={className + ' input'}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e);
      }}
    />
  );
};
