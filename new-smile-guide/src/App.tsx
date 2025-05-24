import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DentalImplantsPage from './pages/DentalImplantsPage';
import CoursesPage from './pages/CoursesPage';
import SpecialistsPage from './pages/SpecialistsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import UserCertificatesPage from './pages/UserCertificatesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dental-implants" element={<DentalImplantsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/specialists" element={<SpecialistsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certificates" element={<UserCertificatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
