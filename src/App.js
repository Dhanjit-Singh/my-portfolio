import './App.css';
import Header from './components/Header';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';

// "homepage": "https://Dhanjit-Singh.github.io/my-portfolio",


function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>


      {/* <BrowserRouter basename="/my-portfolio">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter> */}
    </>
  );
}

export default App;
