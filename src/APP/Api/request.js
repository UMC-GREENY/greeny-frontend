// import axios from "axios";
// export const ACCESS_TOKEN = 'accessToken';

// const request = axios.create({
//     baseURL: 'http://www.greeny.r-e.kr',
//     withCredentials: true,
//     transformRequest: true,
// });

// request.interceptors.request.use((config) => {
//     const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
//     if (accessToken) {
//         config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return config;
// });

// request.interceptors.response.use(
//     (response) => {
//         return response.data;
//     },
//     (error) => {
//         console.error("클라이언트 측 에러:", error);
//         return Promise.reject(error);
//     }
// );

// export default request;

import axios from 'axios';

export const ACCESS_TOKEN = 'accessToken';
export const REFREASH_TOKEN = 'refreashToken';

//앞으로 토큰은 여기서 사용하시면 됩니다..
// Authorization 에 토큰 자동으로 들어가도록 설정하였습니다.
const request = axios.create({
  baseURL: 'http://www.greeny.r-e.kr',
  headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    withCredentials: true,
    transformRequest: true,
    Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
  },
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// request.js 파일에서 refreshToken 내보내기 추가
export const refreshToken = async () => {
  try {
    const response = await axios.post('/api/???', {
      refresh_token: localStorage.getItem('refreshToken'),
    });
    const newAccessToken = response.data.accessToken;
    localStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('토큰 갱신 에러:', error);
    throw error;
  }
};

export default request;
