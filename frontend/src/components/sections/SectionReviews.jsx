import './section.css'

import { useTranslation } from 'react-i18next';

function SectionReviews() {
  const { t } = useTranslation('sections');

  return (
    <>
      <section id='reviews' className='section-container'>
        <header>{t('ui.reviews.header')}</header>
        <span>=== todo: add carousel ===</span>
      </section>
    </>
  );
}

export default SectionReviews;
