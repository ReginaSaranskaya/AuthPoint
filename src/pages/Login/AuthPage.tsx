import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@/features/auth/ui/LoginForm';
import { LoginData, loginUser } from '@/shared/api/api';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    const user = await loginUser(data);
    localStorage.setItem('token', user.token);
    navigate('/home');

    return user;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '90vh',
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
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Login
        </Typography>
        <LoginForm login={login} />
      </Box>
    </Box>
  );
};
