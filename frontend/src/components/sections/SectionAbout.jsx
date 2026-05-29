import './section.css';
import '../common/Layout.css';
import '../common/common.css';
import vk from '../../images/vk.png';

//#region import @mui/material components

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//#endregion

import Typography from '@mui/material/Typography';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SectionAbout () {

  const { t } = useTranslation('sections');

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section id='about' className='section-container'>
        <header>{t('ui.about_us.header')}</header>

        <p>
          {t('ui.about_us.description')}
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
              <Typography component="span">
                {t('ui.about_us.what_we_do.header')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                {t('ui.about_us.what_we_do.description')}
              </p>

            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`-panel2-content`}
              id={`panel2-header`}
            >
              <Typography component="span">
                {t('ui.about_us.style.header')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                {t('ui.about_us.style.description')}
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`-panel3-content`}
              id={`panel3-header`}
            >
              <Typography component="span">
                {t('ui.about_us.details.header')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                {t('ui.about_us.details.description')}
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
