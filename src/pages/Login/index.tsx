import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useForm } from 'react-hook-form';

import { TextField } from '@mui/material';

import PyScript from '../../components/PyScript';

import Card from './components/Card';
import { Container, Image, LoginButton } from './styled';
import { LoginFormTypes } from './types';

export default function Login() {
  const navigate = useNavigate();
  const { register, getValues } = useForm<LoginFormTypes>();

  const loginTest = async () => {
    const { status } = await axios.post('http://localhost:8000/login/', {
      email: getValues('email'),
      password: getValues('password'),
    });
    if (status === 200) {
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
        />
        <LoginButton onClick={loginTest}>로그인</LoginButton>
        <div className='signup-wrapper'>
          <Link to='/signup'>회원가입</Link>
        </div>
      </Card>
      <PyScript src='/src/pyscript/index.py' />
    </Container>
  );
}
