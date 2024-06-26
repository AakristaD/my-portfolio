import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';
import FloatingMessageIcon from './components/FloatingMailerIcon';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail'; // Import ProjectDetail component

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop /> {/* Add this line */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-work" element={<Projects />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project/:projectId" element={<ProjectDetail />} /> {/* Add this route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingMessageIcon />
            <Footer />
        </Router>
    );
};

export default App;
