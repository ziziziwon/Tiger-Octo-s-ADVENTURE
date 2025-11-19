import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
import GalleryPage from './components/GalleryPage';
import BehindTheScene from './components/BehindTheScene';
import InviteScene from './components/InviteScene';
import MemoryStage from './components/MemoryStage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/behind" element={<BehindTheScene />} />
        <Route path="/invite" element={<InviteScene />} />
        <Route path="/memory-stage" element={<MemoryStage />} />
      </Routes>
    </Router>
  );
};

export default App;

