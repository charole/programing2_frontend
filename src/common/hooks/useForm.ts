import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value as T });
  };
  return { state, setState, changeHandler };
};
