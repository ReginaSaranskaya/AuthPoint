import React from 'react';
import { Box, Typography } from '@mui/material';

import { LoginForm } from '@/features/auth/ui/LoginForm';
import { LoginData, loginUser } from '@/shared/api/api';

export const AuthPage: React.FC = () => {
  const login = async (data: LoginData) => {
    const user = await loginUser(data);
    localStorage.setItem('token', user.token);

    return user;
  };

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
        <LoginForm login={login} />
      </Box>
    </Box>
  );
};
