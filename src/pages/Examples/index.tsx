import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GridColDef } from '@mui/x-data-grid';

import { useInput } from '../../common/hooks/useInput';
import { useSelect } from '../../common/hooks/useSelect';
import Grid from '../../components/Grid';
import Select from '../../components/Select';
import TextField from '../../components/TextField';
import { axios } from '../../service';

import CalendarField from './components/CalendarField';
import { Container, ContentWrapper, FieldForm } from './styled';
import { ExampleResponse } from './types';

export default function ExamplesPage() {
  const { state: level, changeHandler: levelChangeHandler } = useSelect('');
  const { state: search, changeHandler: searchChangeHandler } = useInput('');
  const [gridData, setGridData] = useState<ExampleResponse[]>([]);
  const navigate = useNavigate();

  const getExampleData = async () => {
    const { data } = await axios.get<ExampleResponse[]>('/examples/');
    if (data) setGridData(data);
  };

  const searchHandler = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (search.length) {
        const { data } = await axios.get<ExampleResponse[]>('/examples/');
        setGridData(
          data
            .filter((item) => (level !== '' ? item.level === level : item))
            .filter((item) => item.title?.indexOf(search) !== -1)
        );
      } else {
        getExampleData();
      }
    }
  };

  useEffect(() => {
    getExampleData();
  }, []);

  const levelOptions = [
    { value: '', label: '전체' },
    { value: '하', label: '하' },
    { value: '중', label: '중' },
    { value: '상', label: '상' },
  ];

  const gridColumn: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 100 },
    { field: 'title', headerName: '주제', width: 250, align: 'left' },
    { field: 'level', headerName: '난이도', width: 100, sortable: true },
    { field: 'point', headerName: '포인트', width: 100 },
  ];

  return (
    <Container>
      <FieldForm style={{ gap: '20px', marginBottom: '20px' }}>
        <Select
          value={level}
          onChange={levelChangeHandler}
          labelId='level-label'
          id='level'
          label='난이도'
          option={levelOptions}
          style={{ width: '200px' }}
          formOption={{ fullWidth: false }}
        />
        <TextField
          value={search}
          onChange={searchChangeHandler}
          label='Search Questions'
          useSearchIcon
          onKeyDown={searchHandler}
          style={{ width: '400px' }}
        />
        {/* <Button variant='contained' style={{ height: 56, width: 100 }} className='bg-slate-500'>
          검색
        </Button> */}
      </FieldForm>

      <ContentWrapper style={{ gap: '10px' }}>
        <Grid
          columns={gridColumn}
          rows={gridData}
          rootWidth='100%'
          rootHeight={800}
          rootStyle={{ flex: 2 }}
          onRowClick={(rowObject) => {
            if (rowObject?.id) navigate(`/example/${rowObject.id}`);
          }}
        />
        <CalendarField rootStyle={{ flex: 1, maxWidth: 350 }} />
      </ContentWrapper>
    </Container>
  );
}
