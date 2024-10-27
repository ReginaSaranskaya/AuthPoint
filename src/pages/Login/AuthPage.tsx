import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { LoginForm } from '@/features/auth/ui/LoginForm';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          padding: '30px',
          width: '30%',
          border: '1px solid black',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Typography variant="h3">Login</Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};
