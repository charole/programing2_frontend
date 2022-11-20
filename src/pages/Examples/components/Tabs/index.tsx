import { ReactNode, useState } from 'react';

import styled from 'styled-components';

import { Box, Tab, Tabs } from '@mui/material';

import { ExampleResponse } from '../../types';

import { TabContainer } from './styled';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface ExampleTabsProps {
  example?: ExampleResponse;
}

export const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background: rgb(150 150 150);
  }
  & .MuiButtonBase-root {
    border-right: 1px solid #cdcdcd;
    &:last-child {
      border-right: 0;
    }
  }
`;

function TabPanel({ children, index, value, ...other }: TabPanelProps) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function ExampleTabs({ example }: ExampleTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', flex: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          variant='fullWidth'
          indicatorColor='primary'
          style={{ background: '#bdbdbd' }}
        >
          <Tab label='문제' {...a11yProps(0)} style={{ color: '#fff' }} />
          <Tab label='힌트' {...a11yProps(1)} style={{ color: '#fff' }} />
          <Tab label='댓글' {...a11yProps(2)} style={{ color: '#fff' }} />
        </StyledTabs>
      </Box>
      <TabContainer>
        <TabPanel value={value} index={0}>
          <div className='text-lg font-bold mb-3'>
            제목: <br />
            {example?.title}
          </div>
          <div className='text-sm'>
            내용: <br />
            {example?.content}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </TabContainer>
    </Box>
  );
}
