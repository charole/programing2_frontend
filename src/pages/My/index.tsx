import { useEffect, useState } from 'react';

import { useAtomValue } from 'jotai';

import TextField from '../../components/TextField';
import { axios } from '../../service';
import { emailAtom } from '../../store/atoms/user';

import { Container } from './styled';

export default function MyPage() {
  const email = useAtomValue(emailAtom);
  const [form, setForm] = useState({
    email: '',
    name: '',
    age: 0,
    point: 0,
  });

  const findUserData = async () => {
    const { data } = await axios.post('/find/user/', {
      email,
    });

    if (data) setForm(data);
  };

  useEffect(() => {
    findUserData();
  }, []);

  return (
    <Container className='flex flex-col justify-start items-center gap-5'>
      <div className='w-full'>
        <TextField
          value={form.email}
          id='email'
          label='이메일'
          variant='outlined'
          fullWidth
          size='small'
          disabled
        />
      </div>
      <div className='w-full'>
        <TextField
          value={form.name}
          type='text'
          id='name'
          label='닉네임'
          variant='outlined'
          fullWidth
          size='small'
          disabled
        />
      </div>
      <div className='w-full'>
        <TextField
          value={String(form.age)}
          type='number'
          id='age'
          label='나이'
          variant='outlined'
          fullWidth
          size='small'
          disabled
        />
      </div>
      <div className='w-full'>
        <TextField
          value={String(form.point)}
          type='number'
          id='point'
          label='포인트'
          variant='outlined'
          fullWidth
          size='small'
          disabled
        />
      </div>
    </Container>
  );
}
