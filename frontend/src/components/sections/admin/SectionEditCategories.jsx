import '../section.css';

import { TableCrud } from "../../layouts/TableCrud";
import { FormCategory } from '../../popups/FormCategory';

import { Typography } from '@mui/material';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SectionEditCategories = () => {

  const { t } = useTranslation(['pages', 'sections']);

  const [formOpened, setFormOpened] = useState(false);
  const [formState, setFormState] = useState("edit");
  const [selectedCategory, setSelectedCategory] = useState({});

  const columns = [
    { 
      id: 'id',
      label: t('ui.pages.store.columns.id'),
      style: {
        minWidth: 30
      },
      component: 'text'
    },
    { 
      id: 'label',
      label: t('ui.pages.store.columns.category'),
      style: {
        minWidth: 170
      },
      component: 'tags',
      useSelf: true
    }
  ];

  //todo fetch from rest
  const rows = [
    {
      id:'axes',
      type:'category',
      label:t('sections:ui.catalogue.titles.axes'),
      stylePreset: 'gold'
    },
    {
      id:'fix',
      type:'service',
      label:t('ui.pages.store.services.fix'),
      stylePreset: 'sky'
    },
    {
      id:'customization',
      type:'service',
      label:t('ui.pages.store.services.customization'),
      stylePreset: 'wine'
    }
  ];

  function onEditClicked (e) {
    setFormState("edit");
    setSelectedCategory(e);
    setFormOpened(true);
  }
  
  function onDeleteClicked (e) {
    setFormState("delete");
    setSelectedCategory(e);
    setFormOpened(true);
  }

  function onFormClosed () {
    setFormOpened(false);
  }

  return (
    <>
      <section id='edit categories' className='section-container'>
        <header>
          <Typography variant='h3'>
            {t('sections:ui.admin.management.categories')}
          </Typography>
        </header>

        <FormCategory 
          state={formState}
          isOpened={formOpened}
          onClose={onFormClosed}
          item={selectedCategory}  
        />

        <TableCrud 
          rows={rows} 
          columns={columns} 
          onEdit={onEditClicked}
          onDelete={onDeleteClicked}
        />
      </section>
    </>
  );
}