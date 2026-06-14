import { SectionStore } from "../sections/SectionStore";
import { SectionStoreFilters } from "../sections/SectionStoreFilters";

import { useTranslation } from 'react-i18next';

function StorePage () {

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

  function createData(id, image, item, categories, materials, price) {
    return { id, image, item, categories, materials, price };
  }

  const rows = [
    createData(
      1,
      'image1',
      'Axes 1',
      [
        {
          id:'axes',
          type:'category',
          label:t('sections:ui.catalogue.titles.axes')
        },
      ],
      [
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
      100
    ),
    createData(
      2,
      'image2',
      'Axes 2',
      [
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
      [
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
      100
    ),
    createData(
      3, 
      'image3', 
      'Axes 3', 
      [
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
      [
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
      100
    ),
  ];

  return (
    <div>
      <SectionStoreFilters />
      <SectionStore rows={rows} columns={columns}/>
    </div>
  );
}

export default StorePage;