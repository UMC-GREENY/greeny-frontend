import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import { refreshToken } from '../../Api/request';

function UserLikeStore() {
  const [likeStore, setLikeStore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null); // 상태 최상위 레벨로 이동

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await request.get('/api/auth');
        console.log('response', response);
        setIsSuccess(response.isSuccess);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            await refreshToken();
            const response = await request.get('/api/auth');
            setIsSuccess(response.isSuccess);
          } catch (refreshError) {
            console.error('토큰 갱신 중 오류:', refreshError);
          }
        } else {
          console.error('데이터 가져오기 중 오류:', error);
        }
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const fetchLikeStore = async () => {
      setLoading(true);
      console.log(request);
      try {
        const response = await request.get(
          'api/members/simple/store-bookmark?page=0&size=2&sort=id,desc'
        );
        console.log('서버 응답 데이터:', response);
        setLikeStore(response.data.content);
        console.log(likeStore);
      } catch (error) {
        console.error('찜한 스토어 목록을 가져오는데 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikeStore();
  }, []);

  useEffect(() => {
    console.log(likeStore); // userPosts가 업데이트될 때마다 로그 출력
  }, [likeStore]); // userPosts를 의존성 배열로 추가

  return (
    <div>
      <h2>Like Store</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(likeStore) ? (
            likeStore.map((post) => (
              <li key={post.id}>
                <h3>{post.name}</h3>
                <p>{post.writerEmail}</p>
              </li>
            ))
          ) : (
            <p>User posts are not array.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserLikeStore;
