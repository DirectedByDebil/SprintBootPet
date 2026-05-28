import './section.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { useMediaQuery } from "@mui/material";
import { useState } from 'react';

import ModalCategoryInfo from '../popups/ModalCategoryInfo';

import Axes from '../../images/Axes.jpg';
import Talisman from '../../images/Talisman.jpg';
import Custom from '../../images/Custom.jpg';
import Dudka from '../../images/Dudka.jpg';

function SectionCatalogue() {
const itemData = [
  {
    id: 'axes',
    img: Axes,
    title: 'ui.catalogue.titles.axes',
    subtitle: 'ui.catalogue.subtitles.axes',
    description: 'ui.catalogue.descriptions.axes'
  },
  {
    id: 'talismans',
    img: Talisman,
    title: 'ui.catalogue.titles.talismans',
    subtitle: 'ui.catalogue.subtitles.talismans',
    description: 'ui.catalogue.descriptions.talismans'
  },
  {
    id: 'dudki',
    img: Dudka,
    title: 'ui.catalogue.titles.dudki',
    subtitle: 'ui.catalogue.subtitles.dudki',
    description: 'ui.catalogue.descriptions.dudki'
  },
  {
    id: 'customs',
    img: Custom,
    title: 'ui.catalogue.titles.customs',
    subtitle: 'ui.catalogue.subtitles.customs',
    description: 'ui.catalogue.descriptions.customs'
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
      <section id='catalogue' className='section-container'>
        <header>Catalogue Categories Grid</header>
        
        <ModalCategoryInfo 
          isOpened={categoryInfoOpened} 
          onClose={() => setCategoryInfoOpened(false)}
          ariaLabelledBy={"modal-category-info"}
          ariaDescribedBy={"modal-category-description"}
        >
          <Typography id="modal-category-info" variant="h6" component="h2">
            Test: {categoryInfo.title}
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
                  <IconButton
                    onClick={() => onCategoryInfoClick(item)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
                
        <Button variant="contained" href='/store'>To Store</Button>
      </section>
    </>
  );
}

export default SectionCatalogue;
