import React, { useState } from 'react';

import { loginThunk } from '../model/authThunks';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    dispatch(loginThunk({ email, password }));
  };

  return (
    <div>
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Input
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
};
