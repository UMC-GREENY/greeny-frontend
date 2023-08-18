import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import { refreshToken } from '../../Api/request';

function UserReview() {
  const [userReview, setUserReview] = useState([]);
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
    const fetchUserReview = async () => {
      setLoading(true);
      console.log(request);
      try {
        const response = await request.get(
          'api/members/review?type=s&page=0&size=5&sort=id,desc'
        );
        console.log(response);
        setUserReview(response.data.content);
      } catch (error) {
        console.error('사용자의 정보를 가져오는데 실패', error);
      } finally {
        setLoading(false);
        console.log(userReview);
      }
    };

    fetchUserReview();
  }, []);

  useEffect(() => {
    console.log(userReview); // userPosts가 업데이트될 때마다 로그 출력
  }, [userReview]); // userPosts를 의존성 배열로 추가

  return (
    <div>
      <h2>User Review</h2>
      {loading ? (
        <p>Loading2...</p>
      ) : (
        <ul>
          {Array.isArray(userReview) ? (
            userReview.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
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

export default UserReview;
