import './section.css';

import { TablePaginated } from '../layouts/TablePaginated';

import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

export const SectionStore = ({rows, columns}) => {

  const { t } = useTranslation('sections');

  return (
    <>
      <section className='section-container'>
        <header>
          <Typography variant='h3'>
            {t('ui.store.header')}
          </Typography>
        </header>

        <TablePaginated rows={rows} columns={columns} />
        
      </section>
    </>
  );
}