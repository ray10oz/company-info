import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LogisticsPage from './pages/LogisticsPage';
import BigDataPage from './pages/BigDataPage';
import CompliancePage from './pages/CompliancePage';
import PlatformIntegrationPage from './pages/PlatformIntegrationPage';
import DtcBrandPage from './pages/DtcBrandPage';
import SupplyChainPage from './pages/SupplyChainPage';
import DataEnginePage from './pages/DataEnginePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/logistics" element={<LogisticsPage />} />
      <Route path="/big-data" element={<BigDataPage />} />
      <Route path="/compliance" element={<CompliancePage />} />
      <Route path="/platform-integration" element={<PlatformIntegrationPage />} />
      <Route path="/dtc-brand" element={<DtcBrandPage />} />
      <Route path="/supply-chain" element={<SupplyChainPage />} />
      <Route path="/data-engine" element={<DataEnginePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </>
  );
}

export default App;
