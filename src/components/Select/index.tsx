import { ChangeEvent, memo, ReactNode } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectOrigin,
  SelectChangeEvent,
} from '@mui/material';

type SelectValue = string | number;
interface SelectProps {
  value?: SelectValue;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  option?: { value: SelectValue; label: string }[];
  id?: string;
  label?: string;
  labelId?: string;
  formOption?: {
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export default memo(function Select({
  value,
  onChange,
  option,
  formOption,
  id,
  label,
  labelId,
  ...rest
}: SelectProps) {
  return (
    <FormControl fullWidth {...formOption}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <SelectOrigin
        labelId={labelId}
        id={id}
        label={label}
        value={value as string}
        onChange={onChange as (e: SelectChangeEvent<unknown>, child: ReactNode) => void}
        {...rest}
      >
        {option?.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </SelectOrigin>
    </FormControl>
  );
});
