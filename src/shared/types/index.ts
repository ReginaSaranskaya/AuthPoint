export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
