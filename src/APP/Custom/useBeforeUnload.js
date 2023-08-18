import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isAutoState } from '../Login/Recoil/Recoil.auth.state';

function useBeforeUnload() {
  const isAuto = useRecoilValue(isAutoState);
  const [remove, setRemove] = useState(isAuto);
  console.log("remove",remove);
	const removeTokenFromLocalStorage = () => {
      if (!remove) {
        console.log("@@@@@@@@@");
        window.localStorage.clear();
      } else {
        console.log("isAuto false");
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
