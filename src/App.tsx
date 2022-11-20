import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Example from './pages/Example';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/example' element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
