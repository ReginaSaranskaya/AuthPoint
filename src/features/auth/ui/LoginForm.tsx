import React from 'react';
import { TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@/shared/ui/Button';
import { LoginResponse } from '@/shared/api/api';
import { actions } from '@/features/auth/model/authSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export type LoginFormData = {
  username: string;
  password: string;
};

type Props = {
  login: (data: LoginFormData) => Promise<LoginResponse>;
};

export const LoginForm: React.FC<Props> = ({ login }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (
    data: LoginFormData,
  ) => {
    try {
      const { username, token } = await login(data);
      dispatch(actions.setUser({ username, token }));
      reset();
    } catch (error) {
      alert('Ошибка при авторизации: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        variant="outlined"
        {...register('username', { required: 'Username is required' })}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        {...register('password', { required: 'Password is required' })}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};
