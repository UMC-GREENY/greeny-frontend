import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isSuccessState } from '../Login/Recoil/Recoil.auth.state';

function useBeforeUnload() {
  const isSuccess = useRecoilValue(isSuccessState);

  useEffect(() => {
    const removeTokenFromLocalStorage = () => {
      window.localStorage.clear();
    };

    const handleBeforeUnload = (event) => {
      if (isSuccess) {
        removeTokenFromLocalStorage();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isSuccess]);
}

export default useBeforeUnload;
