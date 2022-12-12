import { CSSProperties, useEffect } from 'react';

import dayjs from 'dayjs';

import { useDate } from '../../../../common/hooks/useDate';
import Calendar from '../../../../components/Calendar';

import { Bottom, BottomClearExam, Container, Head } from './styled';

interface CalendarFieldProps {
  rootStyle?: CSSProperties;
}

export default function CalendarField({ rootStyle }: CalendarFieldProps) {
  const { date, setDate } = useDate(null);

  useEffect(() => {
    console.info(date);
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
            <span>3</span>
          </div>
          <div>
            <span>휙득한 포인트</span>
            <span>10</span>
          </div>
        </BottomClearExam>
      </Bottom>
    </Container>
  );
}
