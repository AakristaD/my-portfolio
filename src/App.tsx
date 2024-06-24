import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Home from "./pages/Home"
import About from "./pages/About";
import FloatingMessageIcon from './components/FloatingMailerIcon';
import Contact from "./pages/Contact";


const App: React.FC = () => {
  return (
      <Router>
        <Header />
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            <Route path="/my-work" element={<Projects/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-me" element={<About/>}/>
        </Routes>
          <FloatingMessageIcon />
          <Footer />

      </Router>
  );
};

export default App;
