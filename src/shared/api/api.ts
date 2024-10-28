import axios from 'axios';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  token: string;
  username: string;
  password: string;
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await axios.get(`http://localhost:5000/users`, {
      params: {
        username: data.username,
        password: data.password,
      },
    });

    if (response.data.length > 0) {
      return response.data[0]; // Возвращаем первого найденного пользователя
    } else {
      throw new Error('Неверный логин или пароль');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
