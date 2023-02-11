import { api } from '../api/axios/axios';
import { LoginResponseType, LoginSchemaType } from '../api/schemas/Auth.Schema';

export const signin = async (
  body: LoginSchemaType
): Promise<LoginResponseType> => {
  const response = await api.post('/auth/login', body);
  return response?.data;
};
