import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import PyScript from './components/PyScript';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <PyScript src='/src/pyscript/index.py' />
    </div>
  );
}

export default App;
