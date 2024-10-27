import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { logout } from '@/features/auth/model/authSlice';
import { Button } from '@/shared/ui/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
