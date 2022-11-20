import PyRepl from '../../components/PyRepl';

import ExampleTabs from './components/Tabs';
import { Container, ExampleWrapper, PyReplOutputWrapper } from './styled';

export default function Example() {
  return (
    <Container>
      <ExampleWrapper style={{ gap: 10 }}>
        <ExampleTabs />
        <div style={{ flex: 2, width: '100%' }}>
          <PyRepl stdOut='pyscript-output' rootStyle={{ width: '100%' }} height={600} />
          <PyReplOutputWrapper>
            <div>Result: </div>
            <div id='pyscript-output' style={{ fontWeight: 'bold' }} />
          </PyReplOutputWrapper>
          <div className='w-full flex justify-end items-center mt-2'>
            <button
              type='button'
              onClick={() => {
                document?.getElementById('btnRun')?.click();
              }}
              className='bg-slate-400 p-2 px-4 rounded-md text-white mr-2'
            >
              실행
            </button>
            <button
              type='button'
              onClick={() => {
                console.info('test');
              }}
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
