import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import { LoginForm } from '@/features/auth/ui/LoginForm';
import { LoginData, LoginResponse } from '@/shared/api/api';

describe('LoginForm', () => {
  const login = jest.fn(
    async (data: LoginData): Promise<LoginResponse> => ({
      id: 1,
      token: 'abcd1234',
      ...data,
    }),
  );

  test('renders the login form', () => {
    render(
      <Provider store={store}>
        <LoginForm login={login} />
      </Provider>,
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('submits the form with correct data', async () => {
    render(
      <Provider store={store}>
        <LoginForm login={login} />
      </Provider>,
    );

    fireEvent.input(screen.getByLabelText(/username/i), {
      target: { value: 'admin' },
    });

    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'admin123' },
    });

    await waitFor(() =>
      fireEvent.click(screen.getByRole('button', { name: /login/i })),
    );

    expect(login).toHaveBeenCalledWith({
      username: 'admin',
      password: 'admin123',
    });
  });
});
