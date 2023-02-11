import { api } from '../api/axios/axios';
import {
  LoginResponseType,
  LoginSchemaType,
  RegisterResponseType,
  RegisterSchemaType,
} from '../api/schemas/Auth.Schema';

export const signinService = async (
  body: LoginSchemaType
): Promise<LoginResponseType> => {
  const response = await api.post('/auth/login', body);
  return response?.data;
};

export const registerService = async (
  body: RegisterSchemaType
): Promise<RegisterResponseType> => {
  const response = await api.post('/auth/register', body);
  return response?.data;
};
