import './section.css';

import { useTranslation } from 'react-i18next';

function SectionBlogs() {

  const { t } = useTranslation('sections');

  return (
    <>
      <section id='blogs' className='section-container'>
        <header>{t('ui.blogs.header')}</header>
      </section>
      <span>=== todo: blocks of posts/gifs/videos ===</span>
    </>
  );
}

export default SectionBlogs;