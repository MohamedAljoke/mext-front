import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spinner from '../components/Loading/Loader';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); //muda para true dps
  const router = useRouter();
  const handleComplete = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  useEffect(() => {
    async function checkIsLoggedIn() {
      const isLoggedIn = false;
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/signin');
      }
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
