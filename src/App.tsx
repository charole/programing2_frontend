import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Examples from './pages/Examples';
import Example from './pages/Examples/Example';
import Login from './pages/Login';
import Rank from './pages/Rank';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='container max-w-full'>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/example' element={<Examples />} />
        <Route path='/example/*' element={<Example />} />
        <Route path='/rank' element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;
