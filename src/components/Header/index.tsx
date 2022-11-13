import { Link } from 'react-router-dom';

import PyScript from '../PyScript';

export default function Header() {
  return (
    <header className='w-full absolute top-0 h-16 bg-gray-200 flex justify-between items-center p-5'>
      <Link to='/'>
        <span>logo</span>
      </Link>
      <div className='space-x-2 text-blue-500 font-sans font-medium'>
        <Link to='/signup'>회원가입</Link>
        <Link to='/login'>로그인</Link>
      </div>
      <PyScript src='/src/pyscript/index.py' />
    </header>
  );
}
