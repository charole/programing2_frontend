import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { useInput } from '../../common/hooks/useInput';
import { useSelect } from '../../common/hooks/useSelect';
import Grid from '../../components/Grid';
import Select from '../../components/Select';
import TextField from '../../components/TextField';

import CalendarField from './components/CalendarField';
import { Container, ContentWrapper, FieldForm } from './styled';

export default function Example() {
  const { state: level, changeHandler: levelChangeHandler } = useSelect('');
  const { state: status, changeHandler: statusChangeHandler } = useSelect('');
  const { state: search, changeHandler: searchChangeHandler } = useInput('');

  const levelOptions = [
    { value: 1, label: '하' },
    { value: 2, label: '중' },
    { value: 3, label: '상' },
  ];
  const statusOptions = [
    { value: 1, label: '통과' },
    { value: 0, label: '미통과' },
  ];

  const gridData = [
    { id: 1, name: 'test1', age: 14 },
    { id: 2, name: 'test2', age: 21 },
    { id: 3, name: 'test3', age: 33 },
  ];
  const gridColumn: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 100 },
    { field: 'status', headerName: '상태', width: 100 },
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
        <Select
          value={status}
          onChange={statusChangeHandler}
          labelId='status-label'
          id='status'
          label='상태'
          option={statusOptions}
          style={{ width: '120px' }}
          formOption={{ fullWidth: false }}
        />
        <TextField
          value={search}
          onChange={searchChangeHandler}
          label='Search Questions'
          useSearchIcon
          style={{ width: '400px' }}
        />
        <Button variant='contained' style={{ height: 56, width: 100 }}>
          검색
        </Button>
      </FieldForm>

      <ContentWrapper style={{ gap: '10px' }}>
        <Grid
          columns={gridColumn}
          rows={gridData}
          rootWidth='100%'
          rootHeight={800}
          rootStyle={{ flex: 2 }}
        />
        <CalendarField rootStyle={{ flex: 1 }} />
      </ContentWrapper>
    </Container>
  );
}
