import { Link } from 'react-router-dom';

import axios from 'axios';

import { TextField } from '@mui/material';

import Card from './components/Card';
import { Container, Image, LoginButton } from './styled';

export default function Login() {
  const loginTest = async () => {
    const test = await axios.post('http://localhost:8000/accounts/', {
      name: '이건희',
      email: 'rjs9859392@gmail.com',
      age: 24,
      password: 'test1',
    });
    console.info(test);
  };

  return (
    <Container>
      <Card align='center'>
        <Image src='/src/assets/슝슝이.png' alt='로고 이미지' />
        <TextField id='email' label='Email' variant='outlined' required fullWidth size='small' />
        <TextField
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
    </Container>
  );
}
