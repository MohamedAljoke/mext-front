import { post } from '../api/axios';
import { api } from '../api/axios/axios';
import {
  LoginResponseType,
  LoginSchemaType,
  RegisterResponseType,
  RegisterSchemaType,
} from '../api/schemas/Auth.Schema';

export const signinService = async (
  body: LoginSchemaType
): Promise<LoginResponseType | null> => {
  const response = await post<LoginSchemaType, LoginResponseType>({
    url: '/auth/login',
    body,
  });
  return response;
};

export const registerService = async (
  body: RegisterSchemaType
): Promise<RegisterResponseType | null> => {
  const response = await post<RegisterSchemaType, RegisterResponseType>({
    url: '/auth/register',
    body,
  });
  return response;
};

export const validateAndRefreshToken =
  async ({}): Promise<LoginResponseType | null> => {
    const response = await post<undefined, LoginResponseType>({
      url: '/auth/refresh',
    });
    return response;
  };
