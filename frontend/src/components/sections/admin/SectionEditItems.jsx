import '../section.css';

import { TableCrud } from "../../layouts/TableCrud";
import { FormItem } from '../../popups/FormItem';

import { Typography } from '@mui/material';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export const SectionEditItems = () => {

  const { t } = useTranslation(['pages', 'sections']);

  //todo fetch from rest
  const columns = [
    { 
      id: 'image',
      label: t('ui.pages.store.columns.image'),
      style: {
        minWidth: 170
      },
      component: 'img'
    },
    { 
      id: 'item',
      label: t('ui.pages.store.columns.item'),
      style: {
        minWidth: 170
      },
      component: 'text'
    },
    { 
      id: 'categories',
      label: t('ui.pages.store.columns.categories'),
      style: {
        minWidth: 170
      },
      component: 'tags'
    },
    { 
      id: 'materials',
      label: t('ui.pages.store.columns.materials'),
      style: {
        minWidth: 170
      },
      component: 'tags'
    },
    {
      id: 'price',
      label: t('ui.pages.store.columns.price'),
      style: {
        minWidth: 170
      },
      align: 'right',
      format: (value) => value.toFixed(2),
      component: 'text'
    },
  ];

  //todo fetch from rest
  const rows = [
    {
      id: 1,
      image: 'image1',
      item: 'Axes 1',
      categories: [
        {
          id:'axes',
          type:'category',
          label:t('sections:ui.catalogue.titles.axes')
        },
      ],
      materials: [
        {
          id:'wood',
          type:'materials',
          label:t('ui.pages.store.materials.wood')
        },
        {
          id:'wool',
          type:'materials',
          label:t('ui.pages.store.materials.wool')
        },
        {
          id:'cotton',
          type:'materials',
          label:t('ui.pages.store.materials.cotton')
        },
      ],
      price: 100
    },
    {
      id: 2,
      image: 'image2',
      item: 'Axes 2',
      categories: [
        {
          id:'axes',
          type:'category',
          label:t('sections:ui.catalogue.titles.axes')
        },
        {
          id:'fix',
          type:'service',
          label:t('ui.pages.store.services.fix')
        },
      ], 
      materials: [
        {
          id:'wood',
          type:'materials',
          label:t('ui.pages.store.materials.wood')
        },
        {
          id:'wool',
          type:'materials',
          label:t('ui.pages.store.materials.wool')
        },
        {
          id:'cotton',
          type:'materials',
          label:t('ui.pages.store.materials.cotton')
        },
      ],
      price: 100
    },
    {
      id: 3, 
      image: 'image3', 
      item: 'Axes 3', 
      categories: [
        {
          id:'axes',
          type:'category',
          label:t('sections:ui.catalogue.titles.axes')
        },
        {
          id:'fix',
          type:'service',
          label:t('ui.pages.store.services.fix')
        },
        {
          id:'customization',
          type:'service',
          label:t('ui.pages.store.services.customization')
        },
      ], 
      materials: [
        {
          id:'wood',
          type:'materials',
          label:t('ui.pages.store.materials.wood')
        },
        {
          id:'wool',
          type:'materials',
          label:t('ui.pages.store.materials.wool')
        },
        {
          id:'cotton',
          type:'materials',
          label:t('ui.pages.store.materials.cotton')
        },
      ],
      price: 100
    },
  ];

  const [formOpened, setFormOpened] = useState(false);
  const [formState, setFormState] = useState("edit");
  const [selectedItem, setSelectedItem] = useState({});
  
  function onEditClicked (e) {
    setFormState("edit");
    setSelectedItem(e);
    setFormOpened(true);
  }
  
  function onDeleteClicked (e) {
    setFormState("delete");
    setSelectedItem(e);
    setFormOpened(true);
  }

  function onFormClosed () {
    setFormOpened(false);
  }


  return (
    <>
      <section id='edit items' className='section-container'>

        <header>
          <Typography variant='h3'>
            {t('sections:ui.admin.management.items')}
          </Typography>
        </header>

        <FormItem
          state={formState}
          isOpened={formOpened}
          onClose={onFormClosed}
          item={selectedItem}  
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