import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/product/:productId" element={<ProductPage />} /> */}
      <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
    </Routes>
  );
}
