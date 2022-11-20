import { useEffect, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

export const useSelect = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const changeHandler = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setState(value as T);
  };

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  return { state, setState, changeHandler };
};
