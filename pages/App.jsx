import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from './Index';
import Layout from './Layout';
import Info from './info/Info';
import Wedding from './wedding/Wedding';
import AnnaMathias from './wedding/annamathias/AnnaMathias';
import MobileMenu from './components/MobileMenu'

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/info" element={<Info />} />
          <Route element={<Layout />}>
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/wedding/annamathias" element={<AnnaMathias />} />
          </Route>
        </Routes>
        <MobileMenu />
      </Router>
    </AnimatePresence>
  );
}

export default App;

