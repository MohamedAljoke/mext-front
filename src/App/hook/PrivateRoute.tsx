import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Spinner from '../components/Loading/Loader';
import { validateAndRefreshToken } from '../services/mutation/auth.mutation';
import { useMutation } from 'react-query';
import { saveToken } from '../utils/constants/tokens';
import Header from '../components/Header/Header';
import { AuthContext } from '../context/AuthContext';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext)
  const router = useRouter();
  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/signin')
    }
  }, [user])
  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      {
        user &&
        <>
          <Header user={user} />
          {children}
        </>
      }
    </>
  );
};

export default PrivateRoute;
