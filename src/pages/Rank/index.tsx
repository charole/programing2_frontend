import { useEffect, useState } from 'react';

import { GridColDef } from '@mui/x-data-grid';

import Grid from '../../components/Grid';
import { axios } from '../../service';

import CalendarField from './components/CalendarField';
import { Container, ContentWrapper } from './styled';

interface UsersResponseData {
  age: number;
  clear_example_count: number;
  created_at: string;
  email: string;
  name: string;
  no: number;
  point: number;
}

export default function RankPage() {
  const [gridState, setGridState] = useState<UsersResponseData[]>([]);
  const gridColumn: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 150, hide: true },
    { field: 'rank', headerName: '순위', width: 150, sortable: true },
    { field: 'name', headerName: '닉네임', width: 150 },
    { field: 'clear_example_count', headerName: '해결한 문제 수', width: 150, sortable: true },
    { field: 'point', headerName: '보유한 포인트', width: 150, sortable: true },
  ];

  const getUserData = async () => {
    const { data } = await axios.get<UsersResponseData[]>('/users/');
    const newData = data.map((item) => ({ ...item, id: item.no }));
    setGridState(() => newData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <ContentWrapper style={{ gap: '10px' }}>
        <Grid
          columns={gridColumn}
          rows={gridState}
          rootWidth='100%'
          rootHeight={800}
          rootStyle={{ flex: 2 }}
        />
        <CalendarField rootStyle={{ flex: 1, maxWidth: 350 }} />
      </ContentWrapper>
    </Container>
  );
}
