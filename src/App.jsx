import './App.css'
import { Routes, Route } from 'react-router-dom';

// PAGES
import Layout from './components/pages/layout';
import Home from './components/pages/home';
import LinkEndPointPage from './components/linksEndPage';

// import Missing from './components/pages/missing';
// import Unauthorized from './components/pages/unauthorized';


function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        {/* public routes */}
        <Route path='/' index element={<Home/>} />
        <Route path='/links/:linkId' element={<LinkEndPointPage/>} />

        {/* <Route path='/unauthorized' element={<Unauthorized/>} /> */}
       
      {/* protect routes */}

      {/* catch all 404 */}
        {/* <Route path='/*' element={<Missing/>} /> */}
      </Route>
    </Routes>
    </>
  )
}

export default App
