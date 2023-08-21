import { atom } from 'recoil';

export const isSuccessState = atom({
  key: 'isSuccessState',
  default: false, 
});

export const socialTypeState = atom({
  key: 'socialTypeState',
  default: '', 
});


// export const isAutoState = atom({
// 	key: 'isAutoState',
// 	default: false, 
// });