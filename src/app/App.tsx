import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/shared/ui/Header';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { actions } from '@/features/auth/model/authSlice';
import { MainLayout } from '@/app/main';

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(actions.clearUser());
    navigate('/');
  };
  return (
    <>
      <Header logout={handleLogout} />
      <MainLayout />
    </>
  );
};
