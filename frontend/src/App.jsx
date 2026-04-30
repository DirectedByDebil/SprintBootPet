import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import StorePage from './components/pages/StorePage';
import Layout from './components/common/Layout';

//todo maybe add auth provider
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route path="store" element={<StorePage />} />
            </Route>
          </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
