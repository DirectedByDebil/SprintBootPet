import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModelOutlined from '@mui/icons-material/DarkModeOutlined';

import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

function ButtonChangeTheme({sx}) {

  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {

    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  };

  return (
    <>
      <Box sx={sx}>

        <IconButton
          size="large"
          onClick={toggleTheme}
          >
          {
            (theme === 'light') ? <DarkModelOutlined /> : <LightModeOutlined />  
          }
        </IconButton>
      </Box>
    </>
  );
}


export default ButtonChangeTheme;