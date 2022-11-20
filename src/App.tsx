import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';

import Header from './components/Header';
import FailedModal from './components/Modal/FailedModal';
import SuccessModal from './components/Modal/SuccessModal';
import ExamplesPage from './pages/Examples';
import ExamplesAddPage from './pages/Examples/ExampleAddPage';
import ExamplePage from './pages/Examples/ExamplePage';
import LoginPage from './pages/Login';
import RankPage from './pages/Rank';
import SignupPage from './pages/Signup';
import { emailAtom } from './store/atoms/user';

function App() {
  const [email] = useAtom(emailAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (email === '') navigate('/login');
  }, [navigate]);

  return (
    <div className='container max-w-full'>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/example' element={<ExamplesPage />} />
        <Route path='/example/:id' element={<ExamplePage />} />
        <Route path='/examples/add' element={<ExamplesAddPage />} />
        <Route path='/rank' element={<RankPage />} />
      </Routes>

      <SuccessModal />
      <FailedModal />
    </div>
  );
}

export default App;
