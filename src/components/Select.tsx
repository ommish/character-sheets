import React, { ChangeEventHandler, SelectHTMLAttributes } from 'react';

export const Select: React.FC<
  {
    onChange: ChangeEventHandler<HTMLSelectElement>;
    options: {
      value: string;
      label: string;
    }[];
  } & (
    | {
        multi: true;
        value: string[];
        selectedItemWrapper: React.FC<{
          children: string;
        }>;
      }
    | { multi?: false; value: string; selectedItemWrapper?: null }
  ) &
    SelectHTMLAttributes<HTMLSelectElement>
> = ({
  multi,
  value,
  selectedItemWrapper: SelectedItemWrapper,
  onChange,
  className = '',
  options,
  ...rest
}) => {
  return (
    <>
      {multi && (
        <ul>
          {(value as string[]).map((val) => (
            <SelectedItemWrapper key={val}>{val}</SelectedItemWrapper>
          ))}
        </ul>
      )}
      <select
        {...rest}
        className={className + ' select'}
        value=""
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
