import './Layout.css';
import './common.css';
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg'


function getHeaderInfo(location) {
  if (!location) {
    console.error("location is null!")
    return {title: 'test'};   
  }

  var title;
  const navs = [];
  switch (location.pathname) {
    case '/':
      title = 'HomePage'
      navs.push({id:'#about', label:'about'});
      navs.push({id:'#catalogue', label:'catalogue'});
      navs.push({id:'#reviews', label:'reviews'});
      navs.push({id:'#blogs', label:'blogs'});
      break;
    case '/store':
      title = 'StorePage';
      break;
    default:
      title = 'default';
      break;
  }

  return {title: title, navs:navs};
}


function Header () {
  
  const location = useLocation();
  const {title,navs} = getHeaderInfo(location);

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