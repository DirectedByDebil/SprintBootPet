import './section.css';

import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

function SectionBlogs() {

  const { t } = useTranslation('sections');

  return (
    <>
      <section id='blogs' className='section-container'>
        <header>
          <Typography variant='h3'>
            {t('ui.blogs.header')}
          </Typography>
        </header>
        <span>=== todo: blocks of posts/gifs/videos ===</span>
      </section>
    </>
  );
}

export default SectionBlogs;