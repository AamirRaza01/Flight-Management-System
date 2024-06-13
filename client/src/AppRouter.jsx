import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SearchResultsPage from './pages/SearchResultsPage';
import PassengerDetailsPage from './pages/PassengerDetailsPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminDashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/passenger-details" element={<PassengerDetailsPage />} />
        <Route path="/confirmation" element={<ConfirmationPage/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin-dashboard/*" element={<AdminPanel/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
