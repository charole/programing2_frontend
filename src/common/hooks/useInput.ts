import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export const useInput = (initialValue: string) => {
  const [state, setState] = useState(initialValue);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState(value);
  }, []);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  return { state, setState, changeHandler };
};
