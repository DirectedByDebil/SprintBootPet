import './section.css';

import { useTranslation } from 'react-i18next';

export const SectionStoreFilters = () => {

  const { t } = useTranslation('sections');
  
  return (
    <>
      <section className='section-container'>
        <header>
          {t('ui.store.filters')}
        </header>

      </section>
    </>
  );
}

