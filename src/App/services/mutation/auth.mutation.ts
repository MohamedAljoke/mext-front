import { api } from '../api/axios/axios';
import {
  LoginResponseType,
  LoginSchemaType,
  RegisterResponseType,
  RegisterSchemaType,
} from '../api/schemas/Auth.Schema';

export const signin = async (
  body: LoginSchemaType
): Promise<LoginResponseType> => {
  const response = await api.post('/auth/login', body);
  return response?.data;
};

export const register = async (
  body: RegisterSchemaType
): Promise<RegisterResponseType> => {
  const response = await api.post('/auth/register', body);
  return response?.data;
};
