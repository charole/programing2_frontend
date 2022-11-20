import { Link, useNavigate } from 'react-router-dom';

import { useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { TextField } from '@mui/material';

import { axios } from '../../service';
// import PyScript from '../../components/PyScript';
import { emailAtom } from '../../store/atoms/user';

import Card from './components/Card';
import { Container, Image, LoginButton } from './styled';
import { LoginFormTypes } from './types';

export default function LoginPage() {
  const navigate = useNavigate();
  const setEmail = useSetAtom(emailAtom);
  const { register, getValues } = useForm<LoginFormTypes>();

  const onLogin = async () => {
    const { status } = await axios.post('/login/', {
      email: getValues('email'),
      password: getValues('password'),
    });
    if (status === 200) {
      setEmail(getValues('email'));
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
        />
        <LoginButton onClick={onLogin}>로그인</LoginButton>
        <div className='signup-wrapper'>
          <Link to='/signup'>회원가입</Link>
        </div>
      </Card>
      {/* <PyScript src='/src/pyscript/index.py' /> */}
    </Container>
  );
}
