import { ChangeEventHandler, memo } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField as TextFieldOrigin } from '@mui/material';

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

export default memo(function TextField({
  value,
  onChange,
  id,
  label,
  useSearchIcon,
  ...rest
}: TextFieldProps) {
  return (
    <TextFieldOrigin
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
});
