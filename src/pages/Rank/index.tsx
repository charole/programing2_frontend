import { useEffect } from 'react';

import { GridColDef } from '@mui/x-data-grid';

import Grid from '../../components/Grid';
import { axios } from '../../service';

import CalendarField from './components/CalendarField';
import { Container, ContentWrapper } from './styled';

export default function RankPage() {
  const gridData = [
    { id: 1, rank: 'test1', age: 14 },
    { id: 2, rank: 'test2', age: 21 },
    { id: 3, rank: 'test3', age: 33 },
  ];
  const gridColumn: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 150, hide: true },
    { field: 'rank', headerName: '순위', width: 150, sortable: true },
    { field: 'nickname', headerName: '닉네임', width: 150 },
    { field: 'clearCount', headerName: '해결한 문제 수', width: 150, sortable: true },
    { field: 'point', headerName: '보유한 포인트', width: 150, sortable: true },
  ];

  const testFn = async () => {
    const res = await axios.get('/users/');
    console.info(res);
  };

  useEffect(() => {
    testFn();
  }, []);

  return (
    <Container>
      <ContentWrapper style={{ gap: '10px' }}>
        <Grid
          columns={gridColumn}
          rows={gridData}
          rootWidth='100%'
          rootHeight={800}
          rootStyle={{ flex: 2 }}
        />
        <CalendarField rootStyle={{ flex: 1, maxWidth: 350 }} />
      </ContentWrapper>
    </Container>
  );
}
