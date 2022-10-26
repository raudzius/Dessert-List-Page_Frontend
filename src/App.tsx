import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import ListPage from './pages/ListPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
