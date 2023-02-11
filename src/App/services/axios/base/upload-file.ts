import { AxiosProgressEvent } from 'axios';
import { api } from './axios';
import { tokenKey } from '@/App/utils/constants/tokens';

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};

export default async <T, P>(
  params: HttpPostParams<T>,
  setProgress?: (value: React.SetStateAction<number>) => void
): Promise<P | null> => {
  const response: P = await (
    await api.post(params.url, params.body, {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: 'Bearer ' + localStorage.getItem(tokenKey),
      },
      ...(setProgress && {
        onUploadProgress: function (progressEvent: AxiosProgressEvent) {
          const percentComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total!
          );
          setProgress(percentComplete);
        },
      }),
    })
  ).data;
  return response;
};
