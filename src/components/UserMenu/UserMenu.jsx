import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.auth.user.email);
  

  const handleLogout = () => {
    dispatch(logOut());
    onClose();
    navigate('/login'); 
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
