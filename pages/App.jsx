import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from './Index';
import Layout from './Layout';
import Info from './info/Info';
import Wedding from './wedding/Wedding';
import AnnaMathias from './wedding/annamathias/AnnaMathias';
import Places from './places/Places';
import People from './people/People';

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/info" element={<Info />} />
          <Route element={<Layout />}>
            <Route path="/people" element={<People />} />
            <Route path="/places" element={<Places />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/wedding/annamathias" element={<AnnaMathias />} />
          </Route>
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;

