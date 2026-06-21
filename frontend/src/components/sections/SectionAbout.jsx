import './section.css';
import '../common/Layout.css';
import '../common/common.css';
import About from '../../images/About.jpg';

import {Accordion, AccordionSummary, AccordionDetails,
          Box, Typography,
          Card, CardMedia,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <header>
          <Typography variant='h3'>
            {t('ui.about_us.header')}
          </Typography>
        </header>

        <div className='grid p-top'>

          <Card sx={{ position: 'relative', maxWidth: '100%', borderRadius: '16px' }}>
        
            <CardMedia
              component="img"
              image={About}
              alt="maker"
              className='zooming-img'
              sx={{
                width: '100%',
                maxHeight: '512px',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: { xs: 2, sm: 3, md: 4 },
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" gutterBottom>
                {t('ui.about_us.metamorphosis')}
              </Typography>
              <Typography variant="subtitle1">
                {t('ui.about_us.description')}
              </Typography>
            </Box>
            
          </Card>
  
          <div className='col-started'>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion' disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`-panel1-content`}
                id={`panel1-header`}>

                <Typography variant='h5'>
                  {t('ui.about_us.what_we_do.header')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Typography variant='body1'>
                  {t('ui.about_us.what_we_do.description')}
                </Typography>

              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion' disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`-panel2-content`}
                id={`panel2-header`}>

                <Typography variant='h5'>
                  {t('ui.about_us.style.header')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Typography variant='body1'>
                  {t('ui.about_us.style.description')}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion' disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`-panel3-content`}
                id={`panel3-header`}>

                <Typography variant='h5'>
                  {t('ui.about_us.details.header')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Typography variant='body1'>
                  {t('ui.about_us.details.description')}
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>

        </div>
      </section>
    </>
  );
}

export default SectionAbout;
