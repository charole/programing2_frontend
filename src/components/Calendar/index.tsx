import { Dispatch, SetStateAction } from 'react';

import { Dayjs } from 'dayjs';

import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface CalendarProps {
  state: Dayjs | null;
  setState: Dispatch<SetStateAction<Dayjs | null>>;
}

export default function Calendar({ state, setState }: CalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs='desktop'
        label='Basic example'
        value={state}
        onChange={(newValue) => {
          setState(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
