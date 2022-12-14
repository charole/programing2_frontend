import { useMemo } from 'react';

import { useSetAtom } from 'jotai';

import { useForm } from '../../common/hooks/useForm';
import SelectComponent from '../../components/Select';
import TextFieldComponent from '../../components/TextField';
import { axios } from '../../service';
import {
  failedModalAtom,
  failedModalTextAtom,
  successModalAtom,
  successModalTextAtom,
} from '../../store/atoms/modal';

import { Container } from './styled';

export default function ExamplesAddPage() {
  const { state: form, changeHandler } = useForm({
    title: '',
    content: '',
    answer: '',
    example: '',
    exam_question: '',
    hint: '',
    level: '하',
    exam_type: 'Simple',
    point: 1,
  });
  const setSuccessModalAtom = useSetAtom(successModalAtom);
  const setFailedModalAtom = useSetAtom(failedModalAtom);
  const setSuccessModalTextAtom = useSetAtom(successModalTextAtom);
  const setFailedModalTextAtom = useSetAtom(failedModalTextAtom);

  const levelOptions = useMemo(
    () => [
      { label: '하', value: '하' },
      { label: '중', value: '중' },
      { label: '상', value: '상' },
    ],
    []
  );
  const pointOptions = useMemo(
    () => [
      { label: '1점', value: 1 },
      { label: '2점', value: 2 },
      { label: '3점', value: 3 },
    ],
    []
  );
  const examTypeOptions = useMemo(
    () => [
      { label: '객관식', value: 'Multiple' },
      { label: '주관식', value: 'Simple' },
    ],
    []
  );

  const addExampleDataHandler = async () => {
    const { status } = await axios.post('/examples/', {
      ...form,
    });

    if (status === 200) {
      setSuccessModalTextAtom('문제 등록에 성공하셨습니다!');
      setSuccessModalAtom(true);
    } else {
      setFailedModalTextAtom('문제 등록에 실패하셨습니다.');
      setFailedModalAtom(true);
    }
  };

  return (
    <Container className='flex flex-col justify-start items-start gap-5'>
      <div className='w-full'>
        <TextFieldComponent
          id='title'
          name='title'
          label='제목'
          value={form.title}
          onChange={changeHandler}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='content'
          name='content'
          label='내용'
          value={form.content}
          onChange={changeHandler}
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='answer'
          name='answer'
          label='정답'
          value={form.answer}
          onChange={changeHandler}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='example'
          name='example'
          label='예시'
          value={form.example}
          onChange={changeHandler}
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='exam_question'
          name='exam_question'
          label='문제 보기'
          value={form.exam_question}
          onChange={changeHandler}
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='hint'
          name='hint'
          label='힌트'
          value={form.hint}
          onChange={changeHandler}
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div className='w-full mb-5'>
        <SelectComponent
          id='level'
          name='level'
          label='난이도'
          value={form.level}
          onChange={changeHandler}
          option={levelOptions}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <SelectComponent
          id='point'
          name='point'
          label='포인트'
          value={form.point}
          onChange={changeHandler}
          option={pointOptions}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <SelectComponent
          id='exam_type'
          name='exam_type'
          label='문제 유형'
          value={form.exam_type}
          onChange={changeHandler}
          option={examTypeOptions}
          fullWidth
        />
      </div>
      <button
        type='button'
        className='self-end bg-slate-700 p-2 px-4 rounded-md text-white'
        onClick={addExampleDataHandler}
      >
        등록하기
      </button>
    </Container>
  );
}
