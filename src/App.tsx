import { CssBaseline } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import ListPage from './pages/ListPage';
import NewRecordForm from './pages/NewRecordFormPage';

const App: React.FC = () => (
  <div className="App">
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="newRecord" element={<NewRecordForm />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
