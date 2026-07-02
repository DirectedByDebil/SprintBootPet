import './inputs.css';
import { Tag } from '../common/Tag';

import { Box, Grid,
  Typography, Divider
} from "@mui/material";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const StylePicker = ({
  id='style-picker',
  name='style-preset',
  styleId='',
  disabled=false
}) => {

  const [selectedStyle, setSelectedStyle] = useState({});

  const { t } = useTranslation('elements');

  const stylePresets = [
    {id: 'sky', label:t('ui.labels.stylePresets.sky'), type:'style'},
    {id: 'cyan', label:t('ui.labels.stylePresets.cyan'), type:'style'},
    {id: 'darkSky', label:t('ui.labels.stylePresets.darkSky'), type:'style'},

    {id: 'coral', label:t('ui.labels.stylePresets.coral'), type:'style'},
    {id: 'crimson', label:t('ui.labels.stylePresets.crimson'), type:'style'},
    {id: 'wine', label:t('ui.labels.stylePresets.wine'), type:'style'},
    
    {id: 'wheat', label:t('ui.labels.stylePresets.wheat'), type:'style'},
    {id: 'gold', label:t('ui.labels.stylePresets.gold'), type:'style'},
    {id: 'steel', label:t('ui.labels.stylePresets.steel'), type:'style'},
  ];

  useEffect(()=>{
    if (!styleId || (styleId.length && styleId.length === 0)) {
      return;
    }

    const preset = stylePresets.find(style => style.id === styleId);
    if (preset) {
      setSelectedStyle(preset);
    }

  }, [styleId]);

  function onStyleClicked(preset) {
    if (disabled) return; 
    if (preset !== selectedStyle) {
      setSelectedStyle(preset);
    }
  }

  return (
    <>
      <Box id={id} name={name} className='style-picker'>

        <Typography variant={'h5'} className='style-picker__header'>
          {
            t('ui.labels.stylePicker')
          }
        </Typography>

        <Divider className='style-picker__divider'/>

        <Grid container
          spacing={2}
          columns={{ xs: 1, md: 2, lg: 3}}
        >
          {
            stylePresets.map(style => {
              return (
                <Grid size={1} key={style.id}
                  sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    opacity: disabled ? 0.5 : 1
                  }}
                  onClick={onStyleClicked.bind(this, style)}
                >
                  <Tag clickable item={style}
                    selected={style.id === selectedStyle.id} />
                </Grid>
              );
            })
          }

        </Grid>

      </Box>
    </>
  );
}