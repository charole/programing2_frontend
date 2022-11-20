import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSetAtom } from 'jotai';

import PyRepl from '../../components/PyRepl';
import { axios } from '../../service';
import {
  failedModalAtom,
  failedModalTextAtom,
  successModalAtom,
  successModalTextAtom,
} from '../../store/atoms/modal';

import ExampleTabs from './components/Tabs';
import { Container, ExampleWrapper, PyReplOutputWrapper } from './styled';
import { ExampleResponse } from './types';

export default function ExamplePage() {
  const [example, setExample] = useState<ExampleResponse>({ id: 0 });
  const setSuccessOpen = useSetAtom(successModalAtom);
  const setFailedOpen = useSetAtom(failedModalAtom);
  const setSuccessModalTextAtom = useSetAtom(successModalTextAtom);
  const setFailedModalTextAtom = useSetAtom(failedModalTextAtom);

  const { id } = useParams();

  const getData = async () => {
    const { data } = await axios.get(`/example/${id}`);
    if (data) setExample(data);
  };

  const resultHandler = () => {
    document?.getElementById('btnRun')?.click();
    setTimeout(() => {
      const result = document.getElementById('pyscript-output')?.innerText?.trim();

      if (result === example?.answer?.trim()) {
        setSuccessModalTextAtom('축하해요! 정답을 맞추셨어요!');
        setSuccessOpen(true);
      } else {
        setFailedModalTextAtom('땡! 다시 풀어보세요!');
        setFailedOpen(true);
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
