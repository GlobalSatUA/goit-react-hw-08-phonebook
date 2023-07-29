import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu'; 

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuOpen = () => {
    setIsUserMenuOpen(true);
  };

  const handleUserMenuClose = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <div>
        <Link to="/goit-react-hw-08-phonebook">Contacts</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/registration" style={{ marginLeft: '10px' }}>Registration</Link>
        <button onClick={handleUserMenuOpen} style={{ marginLeft: '10px' }}>User Menu</button>
      </div>

      {/* UserMenu as a modal */}
      {isUserMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ padding: '20px', background: 'white' }}>
            <UserMenu />
            <button onClick={handleUserMenuClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

