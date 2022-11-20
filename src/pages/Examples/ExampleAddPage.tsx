import { useSetAtom } from 'jotai';

import { useInput } from '../../common/hooks/useInput';
import { useSelect } from '../../common/hooks/useSelect';
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
  const { state: title, changeHandler: titleHandler } = useInput('');
  const { state: content, changeHandler: contentHandler } = useInput('');
  const { state: answer, changeHandler: answerHandler } = useInput('');
  const { state: example, changeHandler: exampleHandler } = useInput('');
  const { state: level, changeHandler: levelHandler } = useSelect(1);
  const { state: point, changeHandler: pointHandler } = useSelect(1);
  const setSuccessModalAtom = useSetAtom(successModalAtom);
  const setFailedModalAtom = useSetAtom(failedModalAtom);
  const setSuccessModalTextAtom = useSetAtom(successModalTextAtom);
  const setFailedModalTextAtom = useSetAtom(failedModalTextAtom);

  const levelOptions = [
    { label: '하', value: 1 },
    { label: '중', value: 2 },
    { label: '상', value: 3 },
  ];
  const pointOptions = [
    { label: '1점', value: 1 },
    { label: '2점', value: 2 },
    { label: '3점', value: 3 },
  ];

  const addExampleDataHandler = async () => {
    const { status } = await axios.post('/examples/', {
      title,
      content,
      answer,
      example,
      level,
      point,
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
          label='제목'
          value={title}
          onChange={titleHandler}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='title'
          label='내용'
          value={content}
          onChange={contentHandler}
          fullWidth
          multiline
          rows={4}
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='answer'
          label='정답'
          value={answer}
          onChange={answerHandler}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <TextFieldComponent
          id='example'
          label='예시'
          value={example}
          onChange={exampleHandler}
          fullWidth
        />
      </div>
      <div className='w-full mb-5'>
        <SelectComponent
          id='level'
          label='난이도'
          value={level}
          onChange={levelHandler}
          option={levelOptions}
          fullWidth
        />
      </div>
      <div className='w-full'>
        <SelectComponent
          id='level'
          label='난이도'
          value={point}
          onChange={pointHandler}
          option={pointOptions}
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
