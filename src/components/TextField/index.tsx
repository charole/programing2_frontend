import { ChangeEventHandler } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

interface TextFieldProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  id?: string;
  label?: string;
  formOption?: {
    [key: string]: unknown;
  };
  useSearchIcon?: boolean;
  [key: string]: unknown;
}

export default function TextFieldComponent({
  value,
  onChange,
  id,
  label,
  useSearchIcon,
  ...rest
}: TextFieldProps) {
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: useSearchIcon && (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant='outlined'
      {...rest}
    />
  );
}
