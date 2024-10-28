import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { actions } from '@/features/auth/model/authSlice';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.clearUser();
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
