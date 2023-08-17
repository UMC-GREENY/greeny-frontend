import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isAutoState } from '../Login/Recoil/Recoil.auth.state';

function useBeforeUnload() {
  const isAuto = useRecoilValue(isAutoState);

	const removeTokenFromLocalStorage = () => {
      if (!isAuto) {
        window.localStorage.clear();
      } else {
        console.log("");
      }
		};
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      removeTokenFromLocalStorage();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
}

export default useBeforeUnload;
