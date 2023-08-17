// useBeforeUnload.js
import { useEffect } from 'react';

function useBeforeUnload() {
	const removeTokenFromLocalStorage = () => {
			window.localStorage.clear();
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
