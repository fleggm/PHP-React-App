import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage.js";
import PaperPage from './components/PaperPage.js';
import AuthorPage from './components/AuthorPage.js';
import NotFound from './components/NotFound.js';
import Footer from './components/Footer.js';
import ReadingListPage from './components/ReadingListPage.js';

function App() {
  return (
    <BrowserRouter basename="/kf6012/coursework/part2">
      <div className="App">
      <nav>
        <ul className="PageMenu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="papers">Papers</Link></li>
          <li><Link to="authors">Authors</Link></li>
          <li><Link to="readinglist">Reading List</Link></li>
        </ul>
      </nav>
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="papers" element={<PaperPage />} />
        <Route path="authors" element={<AuthorPage />} />
        <Route path="readinglist" element={<ReadingListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;