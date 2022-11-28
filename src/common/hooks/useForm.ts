import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

export const useForm = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value as T });
  }, []);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  return { state, setState, changeHandler };
};
