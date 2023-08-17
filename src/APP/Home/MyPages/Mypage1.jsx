import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mystyles from './Styled/Mypage.styles';
import { FaStar } from 'react-icons/fa';
import request from '../../Api/request';
import { refreshToken } from '../../Api/request';
import useBeforeUnload from '../../Custom/useBeforeUnload';
import { useRecoilValue } from 'recoil';
import { isAutoState } from '../../Login/Recoil/Recoil.auth.state';

function Mypage() {
  const isAuto = useRecoilValue(isAutoState);
	console.log("isAuto",isAuto);
  useBeforeUnload();
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm('정말 로그아웃을 하십니까');
    if (confirmLogout) {
      window.localStorage.clear();
      alert('로그아웃 완료');
      navigate('/login');
    }
  };
  const handleWithdrawal = () => {
    const confirmWithdrwal = window.confirm('정말 회원탈퇴를 하십니까');
    if (confirmWithdrwal) {
      alert('회원탈퇴 완료');
      navigate('/');
    }
  };

  const usercontentinfo = [
    {
      title: '글제목1',
      email: 'idd**@gmail.com',
      date: '2023.00.00',
    },
    {
      title: '글제목2',
      email: 'idd**@gmail.com',
      date: '2024.00.00',
    },
    {
      title: '글제목3',
      email: 'idd**@gmail.com',
      date: '2025.00.00',
    },
    {
      title: '글제목4',
      email: 'idd**@gmail.com',
      date: '2026.00.00',
    },
  ];
  const myreviewinfo = [
    {
      grade: 3,
      content: '리뷰 후기 내용 미리보기',
      email: 'idd**@gmail.com',
      date: '2023.00.00',
    },
    {
      grade: 4,
      content: '리뷰 후기 내용 미리미리미리미리미리보기',
      email: 'idd**@gmail.com',
      date: '2024.00.00',
    },
    {
      grade: 5,
      content: '리뷰리뷰리뷰리뷰 후기 내용 미리보기',
      email: 'idd**@gmail.com',
      date: '2025.00.00',
    },
  ];
  const [userPosts, setUserPosts] = useState([]);
  const [userReview, setUserReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null); // 상태 최상위 레벨로 이동

  useEffect(() => {
    const fetchData = async () => {
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
    if (isSuccess) {
      const fetchUserPosts = async () => {
        setLoading(true);
        try {
          const response = await request.get(
            '/api/members/post?page=0&size=3&sort=id,desc'
          );
          console.log('서버 응답 데이터:', response);
          setUserPosts(response.data.content);
          console.log(userPosts);
        } catch (error) {
          console.error('사용자의 정보를 가져오는데 실패', error);
        } finally {
          setLoading(false);
        }
      };
      fetchUserPosts();
    }
  }, [isSuccess]);

  // useEffect(() => {
  //   console.log(userPosts); // userPosts가 업데이트될 때마다 로그 출력
  // }, [userPosts]); // userPosts를 의존성 배열로 추가
  useEffect(() => {
    if (isSuccess) {
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
    }
  }, [isSuccess]);

  return (
    <mystyles.Div>
      <mystyles.Wrapper>
        <mystyles.Title style={{ fontFamily: 'Merriweather' }}>
          My Page
        </mystyles.Title>
        <mystyles.firstcontainer>
          <mystyles.secondcontainertitle>
            기본정보
          </mystyles.secondcontainertitle>
          <mystyles.firstcontainerbutton
            onClick={() =>
              navigate('/mypageinfo', {
                state: { type: 'mypageinfopage', name: '기본정보' },
              })
            }
          >
            {'>'}
          </mystyles.firstcontainerbutton>
        </mystyles.firstcontainer>
        <hr></hr>
        <mystyles.secondcontainer>
          <mystyles.secondcontainertitle>
            내가 쓴 글({userPosts.length})
          </mystyles.secondcontainertitle>
          <mystyles.thirdcontainer>
            {Array.isArray(userPosts) ? (
              userPosts.map((post) => (
                <mystyles.mycontents key={post.id}>
                  <mystyles.contentstitle>{post.title}</mystyles.contentstitle>
                  <mystyles.contentsemail>
                    {post.writerEmail}
                  </mystyles.contentsemail>
                  <mystyles.contentsdate>
                    {post.createdAt}
                  </mystyles.contentsdate>
                </mystyles.mycontents>
              ))
            ) : (
              <p>배열이 존재하지 않음</p>
            )}
          </mystyles.thirdcontainer>
        </mystyles.secondcontainer>
        <hr></hr>
        <hr></hr>
        <mystyles.secondcontainer>
          <mystyles.secondcontainertitle>
            내 후기({userReview.length})
          </mystyles.secondcontainertitle>
          <mystyles.thirdcontainer>
            {userReview.map((post) => (
              <mystyles.mycontents key={post.id}>
                <mystyles.reviewstar>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      color={index < post.star ? 'gold' : 'gray'}
                    />
                  ))}
                </mystyles.reviewstar>

                <mystyles.contentstitle>{post.content}</mystyles.contentstitle>
                <mystyles.contentsemail>
                  {post.writerEmail}
                </mystyles.contentsemail>
                <mystyles.contentsdate>{post.createdAt}</mystyles.contentsdate>
              </mystyles.mycontents>
            ))}
          </mystyles.thirdcontainer>
        </mystyles.secondcontainer>
        <mystyles.lastcontainer>
          <mystyles.lastbutton onClick={handleLogout}>
            로그아웃
          </mystyles.lastbutton>
          {'|'}
          <mystyles.lastbutton onClick={handleWithdrawal}>
            회원탈퇴
          </mystyles.lastbutton>
        </mystyles.lastcontainer>
      </mystyles.Wrapper>
    </mystyles.Div>
  );
}

export default Mypage;
