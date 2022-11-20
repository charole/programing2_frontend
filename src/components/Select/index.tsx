import { ReactNode } from 'react';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SelectValue = string | number;
interface SelectProps {
  value?: SelectValue;
  onChange?: (e: SelectChangeEvent<string>, child: ReactNode) => void;
  option?: { value: SelectValue; label: string }[];
  id?: string;
  label?: string;
  labelId?: string;
  formOption?: {
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export default function SelectComponent({
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
      <Select
        labelId={labelId}
        id={id}
        label={label}
        value={value as string}
        onChange={onChange}
        {...rest}
      >
        {option?.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
