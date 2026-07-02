import './common.css';
import { Box, Stack, Typography } from "@mui/material";

import { TaskAlt } from '@mui/icons-material';

export const Tag = ({item, clickable=false, selected=false}) => {

  var id = '';
  var label = '---';
  var data = {};

  if (typeof item === 'object')
  {
    id = item.id;
    label = item.label;

    data[`data-${item.type}-${item.id}`] = true;
  
  } else {
    id = item;
    label = item;
  }

  if (selected) {
    data['data-selected'] = selected;
  }

  const className = `tag ${clickable? 'clickable':''}`;

  return (
    <>
      <Stack direction={'row'} spacing={2}>

        <Box className={className} key={id} {...data}
          sx={{
            display:'inline-flex',
            justifyContent: 'center',
            alignItems:'center',
            gap: '3px'
          }}>
          
          <TaskAlt sx={{
            maxWidth: selected ? '24px' : '0px',
            opacity: selected ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-width 0.3s ease, opacity 0.2s ease',
            flexShrink: 0,
          }} />

            <Typography variant='button'>
              {label}
            </Typography>
        </Box>
      </Stack>
    </>
  );
}
