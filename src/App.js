import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Newsletters from './Components/Newsletters';
import Press from './Components/Press';
import ContactPage from './Components/ContactPage';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Routes>
       <Route element={<Header /> }>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />  
        <Route path="/clients" element={<Clients />} />  
        <Route path="/newsletters" element={<Newsletters />} /> 
        <Route path="/press" element={<Press />} />   
        <Route path="/contact" element={<ContactPage />} />  
        </Route>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
