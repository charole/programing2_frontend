import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState(value as T);
  };

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  return { state, setState, changeHandler };
};
