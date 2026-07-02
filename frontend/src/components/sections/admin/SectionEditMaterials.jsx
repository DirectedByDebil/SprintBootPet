import '../section.css';
import { FormMaterial } from '../../popups/FormMaterial';

import { TableCrud } from "../../layouts/TableCrud";

import { Typography } from '@mui/material';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SectionEditMaterials = () => {

  const { t } = useTranslation(['pages', 'sections']);

  //todo fetch from rest
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
      id:'wood',
      type:'materials',
      label:t('ui.pages.store.materials.wood'),
      stylePreset: 'gold',
    },
    {
      id:'wool',
      type:'materials',
      label:t('ui.pages.store.materials.wool'),
      stylePreset: 'sky'
    },
    {
      id:'cotton',
      type:'materials',
      label:t('ui.pages.store.materials.cotton'),
      stylePreset: 'wine'
    }
  ];

  const [formOpened, setFormOpened] = useState(false);
  const [formState, setFormState] = useState("edit");
  const [selectedMaterial, setSelectedMaterial] = useState({});
  
  function onEditClicked (e) {
    setFormState("edit");
    setSelectedMaterial(e);
    setFormOpened(true);
  }
  
  function onDeleteClicked (e) {
    setFormState("delete");
    setSelectedMaterial(e);
    setFormOpened(true);
  }

  function onFormClosed () {
    setFormOpened(false);
  }

  return (
    <>
      <section id='edit materials' className='section-container'>
        
        <header>
          <Typography variant='h3'>
            {t('sections:ui.admin.management.materials')}
          </Typography>
        </header>

        <FormMaterial 
          state={formState}
          isOpened={formOpened}
          onClose={onFormClosed}
          item={selectedMaterial}  
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