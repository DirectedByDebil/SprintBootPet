import './section.css';
import '../common/common.css';

import { SliderRange } from '../inputs/SliderRange';
import { MultiSelect } from '../inputs/MultiSelect';
import { TextInput } from '../inputs/TextInput';

import { Grid, Typography, Button } from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';

import { useTranslation } from 'react-i18next';

export const SectionStoreFilters = ({categories=[], materials=[]}) => {

  const { t } = useTranslation(['sections', 'pages']);
  
  return (
    <>
      <section className='section-container'>
        <header>
          <Typography variant='h3'>
            {t('ui.store.filters')}
          </Typography>
        </header>

        <Grid container spacing={2} columns={{ xs: 1, md: 2, lg: 4}}
          sx={{marginTop: '24px'}}>

          <Grid size={2}>
            <TextInput label={t('pages:ui.pages.store.search.item')} />
          </Grid>

          <Grid size={2}>

            <SliderRange max={5000} step={500} minDistance={500}
              label={t('pages:ui.pages.store.columns.price')} />
          </Grid>

          <Grid size={1}>
            
            <MultiSelect label={t('pages:ui.pages.store.columns.categories')} items={categories} />
          </Grid>

          <Grid size={1}>
            
            <MultiSelect label={t('pages:ui.pages.store.columns.materials')} items={materials}/>
          </Grid>

        </Grid>

        <Button variant="contained" className='button' reversed
          startIcon={<ShoppingCartCheckout/>}
          sx={{marginTop: '24px'}}>
            
          <Typography variant='button' size='small'>
            {t('pages:ui.pages.store.buttons.filter')}
          </Typography>
        </Button>

      </section>
    </>
  );
}

