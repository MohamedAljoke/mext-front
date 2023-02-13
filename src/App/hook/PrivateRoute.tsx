import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Spinner from '../components/Loading/Loader';
import { validateAndRefreshToken } from '../services/mutation/auth.mutation';
import { useMutation } from 'react-query';
import { saveToken } from '../utils/constants/tokens';

interface Props {
  children: JSX.Element;
  setUser: Dispatch<SetStateAction<string>>;
}

const PrivateRoute: React.FC<Props> = ({ children, setUser }) => {
  const [isLoading, setIsLoading] = useState(true); //muda para true dps
  const router = useRouter();
  const handleComplete = () => {
    setIsLoading(false);
  };
  const { mutate: mutateValidateToken } = useMutation(validateAndRefreshToken);
  useEffect(() => {
    async function checkIsLoggedIn() {
      mutateValidateToken(
        {},
        {
          onSuccess: (response) => {
            handleComplete();
            setUser(response?.name!);
            saveToken(response?.token || '');
          },
          onError: () => {
            router.push('/signin');
          },
        }
      );
    }
    checkIsLoggedIn();
  }, []);
  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default PrivateRoute;
