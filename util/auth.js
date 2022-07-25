import axios from 'axios';
import { API_KEY } from '@env';

export async function createUser(email, password) {
  //making it async means a promise will be returned
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
