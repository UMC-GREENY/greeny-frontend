import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as mystyles from "./Styled/Mypage.styles";
import { FaStar } from "react-icons/fa";
import request from "../../Api/request";
import { refreshToken } from "../../Api/request";
import { ACCESS_TOKEN } from "../../Api/request";
import Pagination from "react-js-pagination";

function Mypage() {
  const navigate = useNavigate();
  /*const usercontentinfo = [
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
  ];*/
  const [userPosts, setUserPosts] = useState([]);
  const [userReview, setUserReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null); // 상태 최상위 레벨로 이동

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get("/api/auth");
        console.log("response", response);
        setIsSuccess(response.isSuccess);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            await refreshToken();
            const response = await request.get("/api/auth");
            setIsSuccess(response.isSuccess);
          } catch (refreshError) {
            console.error("토큰 갱신 중 오류:", refreshError);
          }
        } else {
          console.error("데이터 가져오기 중 오류:", error);
        }
      }
    };

    fetchData();
  }, []);
  //////////////////////////
  ///로그아웃, 회원탈퇴
  const handleLogout = () => {
    const confirmLogout = window.confirm("정말 로그아웃을 하십니까");
    if (confirmLogout) {
      window.localStorage.clear();
      alert("로그아웃 완료");
      navigate("/login");
    }
  };

  const handleWithdrawal = async () => {
    let response;
    const confirmWithdrawal = window.confirm("정말 회원탈퇴를 하십니까");
    if (confirmWithdrawal) {
      try {
        response = await request.delete("/api/members", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              ACCESS_TOKEN
            )}`,
          },
        });
        console.log(response);

        if (isSuccess) {
          alert("회원 탈퇴가 완료되었습니다.");
          // 회원 탈퇴 후 필요한 동작 (예: 로그아웃, 페이지 이동 등)
        } else {
          alert("회원 탈퇴 실패");
        }
      } catch (error) {
        console.error("회원 탈퇴 실패", error);
      }
    }
  };

  ////////////////
  ///작성글 api 연결
  useEffect(() => {
    if (isSuccess) {
      const fetchUserPosts = async () => {
        setLoading(true);
        try {
          const response = await request.get("/api/members/post?sort=id,desc", {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          });
          console.log("서버 응답 데이터:", response);
          setUserPosts(response.data.content);
          console.log(userPosts);
        } catch (error) {
          console.error("사용자의 작성글을 가져오는데 실패", error);
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

  /////////////
  ///후기 api 연결
  useEffect(() => {
    if (isSuccess) {
      const fetchUserReview = async () => {
        setLoading(true);
        console.log(request);
        try {
          const response = await request.get(
            "/api/members/review?type=store&id=1&sort=id,desc",
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  ACCESS_TOKEN
                )}`,
              },
            }
          );
          console.log(response);
          setUserReview(response.data.content);
        } catch (error) {
          console.error("사용자의 후기를 가져오는데 실패", error);
        } finally {
          setLoading(false);
          console.log(userReview);
        }
      };
      fetchUserReview();
    }
  }, [isSuccess]);
  /////////////////////////////////////////////////////

  //page 넘기기

  // 페이지네이션 관련 상태

  const itemsPerPage = 4;
  const [currentPagePosts, setCurrentPagePosts] = useState(1);
  const [currentPageReviews, setCurrentPageReviews] = useState(1);
  // 현재 페이지의 리뷰 목록 계산
  const startIndex1 = (currentPagePosts - 1) * itemsPerPage;
  const startIndex2 = (currentPageReviews - 1) * itemsPerPage;
  const endIndex1 = startIndex1 + itemsPerPage;
  const endIndex2 = startIndex2 + itemsPerPage;
  const currentPosts = userPosts.slice(startIndex1, endIndex1);
  const currentReviews = userReview.slice(startIndex2, endIndex2);

  // 페이지 변경 시 호출되는 함수
  const handlePageChangePosts = (pageNumber) => {
    setCurrentPagePosts(pageNumber);
  };

  const handlePageChangeReviews = (pageNumber) => {
    setCurrentPageReviews(pageNumber);
  };
  ///////////////
  /* const Pagination1 = ({
    totalItems,
    currentPage,
    itemsPerPage,
    onPageChange,
  }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          const isCurrentPage = currentPage === pageNumber;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              disabled={isCurrentPage}
              className={isCurrentPage ? 'current-page' : ''}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    );
  };*/
  ///////////////////////////
  ////검색 sample
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // 검색어가 비어있는 경우
    if (!searchQuery.trim()) {
      setFilteredPosts([]);
      return;
    }

    const lowercaseSearchQuery = searchQuery.toLowerCase();

    const filtered = userPosts.filter((post) => {
      const lowercaseTitle = post.title ? post.title.toLowerCase() : "";

      return lowercaseTitle.includes(lowercaseSearchQuery);
    });

    setFilteredPosts(filtered);
  };

  return (
    <mystyles.Div>
      <mystyles.Wrapper>
        <mystyles.Title style={{ fontFamily: "Merriweather" }}>
          My Page
        </mystyles.Title>
        <mystyles.firstcontainer>
          <mystyles.secondcontainertitle>
            기본정보
          </mystyles.secondcontainertitle>
          <mystyles.firstcontainerbutton
            onClick={() =>
              navigate("/mypageinfo", {
                state: { type: "mypageinfopage", name: "기본정보" },
              })
            }
          >
            {">"}
          </mystyles.firstcontainerbutton>
        </mystyles.firstcontainer>
        <mystyles.secondcontainer>
          <mystyles.secondcontainertitle>
            내가 쓴 글 ({userPosts.length})
          </mystyles.secondcontainertitle>
          <mystyles.thirdcontainer>
            {Array.isArray(userPosts) ? (
              currentPosts.map((post) => (
                <mystyles.mycontents
                  key={post.id}
                  onClick={() => navigate(`/community/${post.id}`)}
                >
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
              <p>게시물이 존재하지 않음</p>
            )}
          </mystyles.thirdcontainer>
        </mystyles.secondcontainer>
        <mystyles.PaginationWrapper>
          <Pagination
            activePage={currentPageReviews}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={userReview.length}
            onChange={handlePageChangeReviews}
            hideFirstLastPages={true}
          />
        </mystyles.PaginationWrapper>
        <mystyles.secondcontainer>
          <mystyles.secondcontainertitle>
            내 후기 ({userReview.length})
          </mystyles.secondcontainertitle>
          <mystyles.thirdcontainer>
            {currentReviews.map((post) => (
              <mystyles.mycontents key={post.id} onClick={() =>
                navigate(`/${post.type}/review/${post.idByType}`, {
                  state: { array: {post} },
                })
              } >
                <mystyles.reviewstar>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      color={index < post.star ? "black" : "gray"}
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
        <mystyles.PaginationWrapper>
        <Pagination
                    activePage={currentPageReviews}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={userReview.length}
                    onChange={handlePageChangeReviews}
                    hideFirstLastPages={true}
                />
        </mystyles.PaginationWrapper>
        <mystyles.lastcontainer>
          <mystyles.lastbutton onClick={handleLogout}>
            로그아웃
          </mystyles.lastbutton>
          {"|"}
          <mystyles.lastbutton onClick={handleWithdrawal}>
            회원탈퇴
          </mystyles.lastbutton>
        </mystyles.lastcontainer>
      </mystyles.Wrapper>
    </mystyles.Div>
  );
}

export default Mypage;
