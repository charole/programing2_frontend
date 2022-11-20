import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import PyRepl from '../../components/PyRepl';

import ExampleTabs from './components/Tabs';
import { Container, ExampleWrapper, PyReplOutputWrapper } from './styled';
import { ExampleResponse } from './types';

export default function Example() {
  const [example, setExample] = useState<ExampleResponse>({ id: 0 });
  const { id } = useParams();

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8000/example/${id}`);
    if (data) setExample(data);
  };

  const resultHandler = () => {
    document?.getElementById('btnRun')?.click();
    setTimeout(() => {
      const result = document.getElementById('pyscript-output')?.innerText?.trim();

      if (result === example?.answer?.trim()) {
        console.info('clear');
      }
    }, 300);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ExampleWrapper style={{ gap: 10 }}>
        <ExampleTabs example={example} />
        <div style={{ flex: 2, width: '100%' }}>
          <PyRepl stdOut='pyscript-output' rootStyle={{ width: '100%' }} height={600} />
          <PyReplOutputWrapper>
            <div>Result: </div>
            <div id='pyscript-output' style={{ fontWeight: 'bold' }} />
          </PyReplOutputWrapper>
          <div className='w-full flex justify-end items-center mt-2'>
            <button
              type='button'
              onClick={() => document?.getElementById('btnRun')?.click()}
              className='bg-slate-400 p-2 px-4 rounded-md text-white mr-2'
            >
              실행
            </button>
            <button
              type='button'
              onClick={resultHandler}
              className='bg-slate-700 p-2 px-4 rounded-md text-white'
            >
              제출
            </button>
          </div>
        </div>
      </ExampleWrapper>
    </Container>
  );
}
