import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import PyRepl from '../../components/PyRepl';
import { axios } from '../../service';
import {
  confirmModalAtom,
  confirmModalTextAtom,
  confirmStateAtom,
  failedModalAtom,
  failedModalTextAtom,
  successModalAtom,
  successModalTextAtom,
} from '../../store/atoms/modal';
import { emailAtom } from '../../store/atoms/user';

import ExampleTabs from './components/Tabs';
import { Container, ExampleQuestionWrapper, ExampleWrapper, PyReplOutputWrapper } from './styled';
import { ExampleResponse } from './types';

export default function ExamplePage() {
  const [example, setExample] = useState<ExampleResponse>({ id: 0 });
  const [useHint, setUseHint] = useState(false);
  const [select, setSelect] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const email = useAtomValue(emailAtom);
  const [confirmState, setConfirmState] = useAtom(confirmStateAtom);
  const setSuccessOpen = useSetAtom(successModalAtom);
  const setFailedOpen = useSetAtom(failedModalAtom);
  const setSuccessModalTextAtom = useSetAtom(successModalTextAtom);
  const setFailedModalTextAtom = useSetAtom(failedModalTextAtom);
  const setConfirmModal = useSetAtom(confirmModalAtom);
  const setConfirmModalText = useSetAtom(confirmModalTextAtom);

  const { id } = useParams();

  const getData = async () => {
    const { data } = await axios.get(`/example/${id}`);
    if (data) {
      const selectArr = data.exam_question
        .split(/[\d]번/gi)
        .map((item: string) => item && item.trim())
        .filter((item: string) => item !== '');
      setExample(data);
      setSelect(selectArr || []);
    }
  };

  const selectResultHandler = () => {
    if (selectValue === example?.answer?.trim()) {
      setSuccessModalTextAtom('축하해요! 정답을 맞추셨어요!');
      setSuccessOpen(true);
      if (example?.point) {
        axios.put('/point/add/', {
          email,
          point: example.point,
        });
      }
      axios.put('/account/clear_exam', {
        email
      })
    } else {
      setFailedModalTextAtom('땡! 다시 풀어보세요!');
      setFailedOpen(true);
    }
  };
  const resultHandler = () => {
    document?.getElementById('btnRun')?.click();
    setTimeout(() => {
      const result = document.getElementById('pyscript-output')?.innerText?.trim();

      if (result === example?.answer?.trim()) {
        setSuccessModalTextAtom('축하해요! 정답을 맞추셨어요!');
        setSuccessOpen(true);
        if (example?.point) {
          axios.put('/point/add/', {
            email,
            point: example.point,
          });
        }
        axios.put('/account/clear_exam', {
          email
        })
      } else {
        setFailedModalTextAtom('땡! 다시 풀어보세요!');
        setFailedOpen(true);
      }
    }, 300);
  };

  const getHintHandler = () => {
    setConfirmModalText('힌트 보기 시 1 포인트가 차감됩니다. 정말 확인 하시겠습니까?');
    setConfirmModal(true);
  };

  const getHintData = async () => {
    try {
      const {
        status,
        data: { message },
      } = await axios.post('point/use/hint/', { email });

      if (status === 200) {
        const el = document.getElementById('repl-example-id')?.querySelector('.cm-line');
        if (el && example?.hint) el.innerHTML = example.hint;
        setUseHint(() => true);
      } else {
        setFailedOpen(true);
        setFailedModalTextAtom(message);
        setConfirmState(() => false);
      }
    } catch (err) {
      setFailedOpen(true);
      setFailedModalTextAtom(JSON.stringify(err));
      setConfirmState(() => false);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      const el = document.getElementById('repl-example-id')?.querySelector('.cm-line');
      if (el) el.innerHTML = '';
      setConfirmState(() => false);
    };
  }, []);

  useEffect(() => {
    if (confirmState) {
      getHintData();
    }
  }, [confirmState]);

  return (
    <Container>
      <ExampleWrapper style={{ gap: 10 }}>
        <ExampleTabs example={example} useHint={useHint} getHintHandler={getHintHandler} />
        <div style={{ flex: 2, width: '100%' }}>
          <div style={{ display: example?.exam_type === 'Multiple' ? 'none' : 'block' }}>
            <PyRepl
              id='repl-example-id'
              stdOut='pyscript-output'
              rootStyle={{ width: '100%' }}
              height={600}
            />
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
          <div style={{ display: example?.exam_type === 'Simple' ? 'none' : 'block' }}>
            <div>
              {select?.map((item, index) => {
                return (
                  <ExampleQuestionWrapper>
                    <input
                      type='radio'
                      id={`exam_question_${index + 1}`}
                      name='exam_question'
                      onChange={(e) => setSelectValue(e.target.id.replace(/[^0-9]/g, ''))}
                    />
                    <label htmlFor={`exam_question_${index + 1}`}>{item}</label>
                  </ExampleQuestionWrapper>
                );
              })}
            </div>
            <div className='w-full flex justify-end items-center mt-2'>
              <button
                type='button'
                onClick={selectResultHandler}
                className='bg-slate-700 p-2 px-4 rounded-md text-white'
              >
                제출
              </button>
            </div>
          </div>
        </div>
      </ExampleWrapper>
    </Container>
  );
}
