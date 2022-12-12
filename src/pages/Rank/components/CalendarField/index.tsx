import { CSSProperties, useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { useDate } from '../../../../common/hooks/useDate';
import Calendar from '../../../../components/Calendar';

import { Bottom, BottomClearExam, Container, Head } from './styled';

import { axios } from '../../../../service';
import { useAtomValue } from 'jotai';
import { emailAtom } from '../../../../store/atoms/user';

interface CalendarFieldProps {
  rootStyle?: CSSProperties;
}

export default function CalendarField({ rootStyle }: CalendarFieldProps) {
  const { date, setDate } = useDate(null);

  const email = useAtomValue(emailAtom);
  const [form, setForm] = useState({
    point: 0,
    clear_example_count: 0,
  });
  
  const findUserData = async () => {
    const { data } = await axios.post('/find/user/', {
      email,
    });

    if (data) setForm(data);
  };

  useEffect(() => {
    console.info(date);
    findUserData();
  }, [date]);

  return (
    <Container style={{ ...rootStyle }} className='calender'>
      <Head style={{ marginBottom: 10 }}>
        <span>Day {dayjs(date).date() || dayjs().date()}</span>
        <span>
          <span style={{ cursor: 'pointer', padding: '0.5rem' }}>&lt;</span>
          &nbsp;
          <span style={{ cursor: 'pointer', padding: '0.5rem' }}>&gt;</span>
        </span>
      </Head>
      <Calendar state={date} setState={setDate} />
      <Bottom className='bottom-clear-exam'>
        <h2 style={{ marginBottom: 10, fontWeight: 'bold' }}>Today Clear</h2>
        <BottomClearExam>
          <div>
            <span>해결한 문제</span>
            <span>{form.clear_example_count}</span>
          </div>
          <div>
            <span>휙득한 포인트</span>
            <span>{form.point}</span>
          </div>
        </BottomClearExam>
      </Bottom>
    </Container>
  );
}
