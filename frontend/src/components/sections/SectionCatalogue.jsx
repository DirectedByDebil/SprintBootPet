import './section.css';
import '../common/common.css'

import {ImageList, ImageListItem, ImageListItemBar,
        Button, IconButton,
        Typography, Divider
} from '@mui/material';

import { Info, ShoppingCartCheckout } from '@mui/icons-material';

import { useMediaQuery } from "@mui/material";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ModalCategoryInfo from '../popups/ModalCategoryInfo';

//#region import images

import Axes from '../../images/Axes.jpg';
import Talisman from '../../images/Talisman.jpg';
import Custom from '../../images/Custom.jpg';
import Dudka from '../../images/Dudka.jpg';

//#endregion

function SectionCatalogue() {

const { t } = useTranslation('sections');

//todo add dices
const itemData = [
  {
    id: 'axes',
    img: Axes,
    title: t('ui.catalogue.titles.axes'),
    subtitle: t('ui.catalogue.subtitles.axes'),
    description: t('ui.catalogue.descriptions.axes')
  },
  {
    id: 'talismans',
    img: Talisman,
    title: t('ui.catalogue.titles.talismans'),
    subtitle: t('ui.catalogue.subtitles.talismans'),
    description: t('ui.catalogue.descriptions.talismans')
  },
  {
    id: 'dudki',
    img: Dudka,
    title: t('ui.catalogue.titles.dudki'),
    subtitle: t('ui.catalogue.subtitles.dudki'),
    description: t('ui.catalogue.descriptions.dudki')
  },
  {
    id: 'customs',
    img: Custom,
    title: t('ui.catalogue.titles.customs'),
    subtitle: t('ui.catalogue.subtitles.customs'),
    description: t('ui.catalogue.descriptions.customs')
  },
];

const isMedium = useMediaQuery('(min-width:900px)');
const isLarge = useMediaQuery('(min-width:1200px)');

var col = isMedium ? 2 : 1;
col = isLarge ? 4 : col;

var gap = isMedium ? 4 : 2;
gap = isLarge ? 6 : gap;

const [categoryInfo, setCategoryInfo] = useState(itemData[0]);
const [categoryInfoOpened, setCategoryInfoOpened] = useState(false);

const onCategoryClick = (item) => {
  window.location.href = `${window.location.origin}/store?category=${item.id}`;
};

const onCategoryInfoClick = (item) => {
  setCategoryInfo(item);
  setCategoryInfoOpened(true);
}

  return (
    <>
      <section id='catalogue' className='section-container' reversed>
        <header>
          <Typography variant='h3'>
            {t('ui.catalogue.header')}
          </Typography>
        </header>
        
        <ModalCategoryInfo 
          isOpened={categoryInfoOpened} 
          onClose={() => setCategoryInfoOpened(false)}
          ariaLabelledBy={"modal-category-info"}
          ariaDescribedBy={"modal-category-description"}
        >
          <Typography id="modal-category-info" variant="h4">
            {categoryInfo.title}
          </Typography>
          <Divider />
          <Typography id="modal-category-description">
            {categoryInfo.description}
          </Typography>

        </ModalCategoryInfo>

        <ImageList
          cols={col}
          gap={gap}>
          {itemData.map((item) => (
            <ImageListItem key={item.id}
              sx={{
                borderRadius: 4
              }}>
              <img className='zooming-img'
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                onClick={() => onCategoryClick(item)}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.subtitle}
                actionIcon={
                  <IconButton sx={{color:'white'}}
                    onClick={() => onCategoryInfoClick(item)}
                  >
                    <Info />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
                
        <Button variant="contained" className='button'
          href='/store'
          startIcon={<ShoppingCartCheckout/>}>
            
          <Typography variant='button' size='small'>
            {t('ui.catalogue.buttons.to_store')}
          </Typography>
        </Button>
      </section>
    </>
  );
}

export default SectionCatalogue;
