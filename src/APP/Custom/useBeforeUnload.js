import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
// import { isAutoState } from '../Login/Recoil/Recoil.auth.state';
import { isAutoState } from './Recoil/Custom.recoil.auto';

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

// function useBeforeUnload() {
//   const isAuto = useRecoilValue(isAutoState);
//   console.log("isAuto",isAuto);
// 	const removeTokenFromLocalStorage = () => {
//       if (!isAuto) {
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//         window.localStorage.clear();
//       } else {
//         console.log("~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//       }
// 		};
//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       console.log("isAuto",isAuto);
//       removeTokenFromLocalStorage();
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);
// }

// export default useBeforeUnload;
