import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Header from '../Header/Header';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/goit-react-hw-08-phonebook" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
