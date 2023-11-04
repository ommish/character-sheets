import React, {
  ChangeEventHandler,
  SelectHTMLAttributes,
  useState,
} from 'react';

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
        initialValue: string[];
        selectedItemWrapper: React.FC<{
          children: string;
          onRemove: () => void;
        }>;
      }
    | { multi?: false; initialValue: string; selectedItemWrapper?: null }
  ) &
    SelectHTMLAttributes<HTMLSelectElement>
> = ({
  multi,
  initialValue,
  selectedItemWrapper: SelectedItemWrapper,
  onChange,
  className = '',
  options,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <>
      {multi && (
        <ul>
          {(value as string[]).map((val) => (
            <SelectedItemWrapper
              key={val}
              onRemove={() => {
                setValue(
                  (value as string[]).filter((current) => current !== val),
                );
              }}
            >
              {val}
            </SelectedItemWrapper>
          ))}
        </ul>
      )}
      <select
        {...rest}
        className={className + ' select'}
        value=""
        onChange={(e) => {
          onChange(e);
          if (
            multi &&
            e.currentTarget.value &&
            !value.includes(e.currentTarget.value)
          ) {
            setValue(value.concat(e.currentTarget.value));
          } else if (!multi) {
            setValue(e.currentTarget.value);
          }
        }}
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
