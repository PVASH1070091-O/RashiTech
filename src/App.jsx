import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import { useEffect } from 'react';
import ScrollToTop from './ScrollToTop';

export default function App() {

  return (
    
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
      </Routes>
  
  );
}
