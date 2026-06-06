import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.svg';

function Logo () {

  const { t } = useTranslation('common');
  const title = t('ui.headers.pages.home_page');

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <header style={{color:'black'}}>
          <Typography
            variant='h6'
            component="a"
            href='/'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={logo} alt='logo' height={24}></img>
            {title}      
          </Typography>
        </header>
      </Box>
    </>
  );

}

export default Logo;