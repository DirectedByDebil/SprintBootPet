import './Layout.css';
import './common.css';

import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '../../images/logo.svg'

//todo use header-menu component

function getHeaderInfo(location, t) {
  if (!location) {
    console.error("location is null!")
    return {title: ''};   
  }

  var title;
  const navs = [];
  switch (location.pathname) {
    case '/':
      title = t('ui.headers.pages.home_page')
      navs.push({id:'#about', label:t('ui.headers.sections.about_us')});
      navs.push({id:'#catalogue', label:t('ui.headers.sections.catalogue')});
      navs.push({id:'#reviews', label:t('ui.headers.sections.reviews')});
      navs.push({id:'#blogs', label:t('ui.headers.sections.blogs')});
      break;
    case '/store':
      title = t('ui.headers.pages.store');
      break;
    default:
      title = t('ui.headers.pages.default');
      break;
  }

  return {title: title, navs:navs};
}


function Header () {

  const { t } = useTranslation('common');
  
  const location = useLocation();
  const {title,navs} = getHeaderInfo(location, t);

  return (
    <>
      <div className='page-header'>
        <a href='/' className='row-centered'>
          <img src={logo} alt='logo' height={24}></img>
        </a>
        <header>
          {title}

          <nav className='page-navbar'>
            {
              navs.map((item) => (
                <span key={item.id}>
                  <a href={item.id}>{item.label}</a>
                </span>
              ))
            }
  
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;