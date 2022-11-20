import { useEffect, useState } from 'react';

import { Dayjs } from 'dayjs';

export const useDate = (initialValue: Dayjs | null) => {
  const [date, setDate] = useState(initialValue || null);

  useEffect(() => {
    setDate(initialValue);
  }, [initialValue]);

  return { date, setDate };
};
