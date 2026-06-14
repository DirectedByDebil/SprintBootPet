import './common.css';
import { Box } from "@mui/material";

export const Tag = ({item}) => {

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

  return (
    <>
      <Box className='tag' key={id} {...data}>
        {label}
      </Box>
    </>
  );
}
