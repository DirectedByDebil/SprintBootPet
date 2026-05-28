import './section.css';
import '../common/Layout.css';
import '../common/common.css';
import vk from '../../images/vk.png';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Typography from '@mui/material/Typography';

import { useState } from 'react';

function SectionAbout () {

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section id='about' className='section-container'>
        <header>About us</header>

        <p>
          Творческое пространство 
          Мастерская ручной работы, кастома и декупажа
        </p>
  

        <div className='grid'>
          {/* todo maybe make carousel */}
          <img src={vk} alt='maker'/>

          <div className='col-started'>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`-panel1-content`}
              id={`panel1-header`}
            >
              <Typography component="span">Что делаем?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Любое изделие или план кастомизации можно заказать или приобрести в личной переписке
                Событие, будь то день рождения друга, родного человека или хорошего знакомого;
              </p>

            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`-panel2-content`}
              id={`panel2-header`}
            >
              <Typography component="span">Никакого аниме!!!</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Декорация // реквизит к мероприятию, фотосессии или косплей сьют
                <strong>
                (все естественно в стилистике канала - аниме изделия не изготавливаю!!!)
                </strong>
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`-panel3-content`}
              id={`panel3-header`}
            >
              <Typography component="span">Условия</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Детали обговариваются, всё уточняется, сроки озвучиваются.
                Деньги беру только по изготовлению заказа и передачи
                <strong>
                  ❗️Предоплата возможна
                </strong>,
                при условии работы с дорогим/редким материалом
              </p>

            </AccordionDetails>
          </Accordion>

          </div>

        </div>
      </section>
    </>
  );
}

export default SectionAbout;
