import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout () {
  return (
    <>
      <div className='page-container'>
        <Header />
        <div className='page-content'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;