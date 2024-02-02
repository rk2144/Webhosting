import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './Pages/about';
import Domain from './Pages/domain';

import Index from './Pages';
import Blog from './Pages/blog';
import Contact from './Pages/contact';
import VPS from './Pages/Hosting Pages/vps';
import CloudHost from './Pages/Hosting Pages/cloudHosting';
import Reseller from './Pages/Hosting Pages/resellerhosting';
import SHost from './Pages/Hosting Pages/sharehosting';





function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/domain' element={<Domain/>}/>
          
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/vps' element={<VPS/>}/>
          <Route path='/cloudHosting' element={<CloudHost/>}/>
          <Route path='/resellerHosting' element={<Reseller/>}/>
          <Route path='/sHosting' element={<SHost/>}/>
          <Route path='/vps' element={<VPS/>}/>
          
          
          
          
        
         
        </Routes>
      </Router>
    
  );
}

export default App;
