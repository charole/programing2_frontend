import { CSSProperties } from 'react';

import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid';

interface GridProps<T = object> {
  columns: GridColumns<object>;
  rows: T[];
  rootWidth?: number | string;
  rootHeight?: number | string;
  rootStyle?: CSSProperties;
}

export default function Grid({ columns, rows, rootWidth, rootHeight, rootStyle }: GridProps) {
  const gridColumn: GridColDef[] = columns.map((item) => ({
    headerAlign: 'center',
    align: 'center',
    ...item,
  }));

  return (
    <div style={{ height: rootHeight || 400, width: rootWidth || '100%', ...rootStyle }}>
      <DataGrid
        rows={rows}
        columns={gridColumn}
        onRowClick={(arg) => {
          console.info(arg);
        }}
      />
    </div>
  );
}
