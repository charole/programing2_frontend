import { useNavigate } from 'react-router-dom';

import { useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { TextField } from '@mui/material';

import { axios } from '../../service';
import { ageAtom, emailAtom, nameAtom } from '../../store/atoms/user';
import Card from '../Login/components/Card';

import { Container, Image, LoginButton } from './styled';
import { SignupFormTypes } from './types';

export default function SignupPage() {
  const navigate = useNavigate();
  const { register, getValues } = useForm<SignupFormTypes>();
  const setEmail = useSetAtom(emailAtom);
  const setName = useSetAtom(nameAtom);
  const setAge = useSetAtom(ageAtom);

  const onSignup = async () => {
    const {
      data: { age, email, name },
      status,
    } = await axios.post('/accounts/', {
      email: getValues('email'),
      password: getValues('password'),
      name: getValues('name'),
      age: getValues('age'),
      point: 0,
    });
    if (status === 200) {
      setEmail(email);
      setName(name);
      setAge(age);
      navigate('/');
    }
  };

  return (
    <Container>
      <Card align='center'>
        <Image src='/src/assets/슝슝이.png' alt='로고 이미지' />
        <TextField
          {...register('email')}
          type='email'
          id='email'
          label='Email'
          variant='outlined'
          required
          fullWidth
          size='small'
          style={{ marginBottom: '15px' }}
        />
        <TextField
          {...register('password')}
          type='password'
          id='password'
          label='Password'
          variant='outlined'
          required
          fullWidth
          size='small'
          style={{ marginBottom: '15px' }}
        />
        <TextField
          {...register('name')}
          type='text'
          id='name'
          label='name'
          variant='outlined'
          required
          fullWidth
          size='small'
          style={{ marginBottom: '15px' }}
        />
        <TextField
          {...register('age')}
          type='number'
          id='age'
          label='age'
          variant='outlined'
          required
          fullWidth
          size='small'
          style={{ marginBottom: '15px' }}
        />
        <LoginButton onClick={onSignup}>회원가입</LoginButton>
      </Card>
      {/* <PyScript src='/src/pyscript/index.py' /> */}
    </Container>
  );
}
