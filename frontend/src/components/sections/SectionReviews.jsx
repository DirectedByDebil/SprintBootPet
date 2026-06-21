import './section.css'

import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

function SectionReviews() {
  const { t } = useTranslation('sections');

  return (
    <>
      <section id='reviews' className='section-container'>
        <header>
          <Typography variant='h3'>
            {t('ui.reviews.header')}
          </Typography>
        </header>
        <span>=== todo: add carousel ===</span>
      </section>
    </>
  );
}

export default SectionReviews;
