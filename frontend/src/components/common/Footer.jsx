import './Layout.css';
import './common.css';

import { useTranslation } from 'react-i18next';

import TelegramIcon from '@mui/icons-material/Telegram';

import telegram from '../../images/telegram.png';
import vk from '../../images/vk.png';

function Footer () {

  const { t } = useTranslation('common');

  return (
    <>
      <div className='page-footer section-container' reversed >
        <footer className='grid'>

          <section>
            <header>
              {t('ui.headers.sections.contacts')}
            </header>
            <div className='col-started'>
              <div className='row-started'>
                <a href='/todo_vk'>
                  <img src={vk} alt='vk' height={32} />
                </a>
                <a href='/todo_tg'>
                  <img src={telegram} alt='telegram' height={32} />
                  <TelegramIcon />
                </a>
              </div>
              <span>org@mail.ru</span>
              <span>phone as num</span>
            </div>
          </section>

          <section>
            <header>
              {t('ui.headers.sections.legal_information')}
            </header>
            <div className='col-started'>
              <a href='/doc_1'>Doc ref 1</a>
              <a href='/doc_2'>Doc ref 2</a>
              <a href='/doc_3'>Doc ref 3</a>
              <a href='/doc_4'>Doc ref 4</a>
              <a href='/doc_5'>Doc ref 5</a>
            </div>
          </section>

        </footer>
      </div>
    </>
  );
}

export default Footer;