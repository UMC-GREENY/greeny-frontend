import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles";
import Pagination from "react-js-pagination";
import request from "../Api/request";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import StoreCard from "./Category.main.storeCard";
import { ACCESS_TOKEN, REFRESH_TOKEN, refreshToken } from "../Api/request";

// import Dropdown from "./Category.main.dropdown";

function AllItem() {
  const isSuccess = useRecoilValue(isSuccessState);
  const [allItem, setAllItem] = useState([]);
  const [locationKw, setLocationKw] = useState("");
  const [categoryKw, setCategoryKw] = useState("");
  const [buttonType, setButtonType] = useState("");

  useEffect(() => {
    let isMounted = true; // 언마운트 상태 확인을 위한 변수

    setAllItem([]);

    const fetchData = async () => {
      try {
        if (isMounted) {
          const response = await request.get(
            "/api/stores/simple?page=0&size=800"
          );
          console.log("response:", response.data);
          setAllItem(response.data.content);
        }
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // 컴포넌트 언마운트 시 변수 업데이트
    };
  }, []); // 의존성 배열에 isProduct 추가

  // 페이지네이션 관련 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 현재 페이지의 리뷰 목록 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItem.slice(startIndex, endIndex);

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortBest = async () => {
    // console.log(props, "prop");
    try {
      if (locationKw === "" && categoryKw === "") {
        const response = await request.get(
          `/api/stores/simple?page=0&size=800&sort=${buttonType},desc`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        console.log(`/api/stores/simple?page=0&size=800&sort=${buttonType}`);
        setAllItem(response.data.content);
      } else {
        if (locationKw !== "" && categoryKw === "") {
          const response = await request.get(
            `/api/stores/simple?location=${encodeURIComponent(
              locationKw
            )}&page=0&size=800&sort=${buttonType},desc`,
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  ACCESS_TOKEN
                )}`,
              },
            }
          );
          console.log(
            `/api/stores/simple?location=${encodeURIComponent(
              locationKw
            )}&page=0&size=800&sort=${buttonType},desc`
          );
          setAllItem(response.data.content);
        } else {
          if (locationKw === "" && categoryKw !== "") {
            const response = await request.get(
              `/api/stores/simple?location=${encodeURIComponent(
                locationKw
              )}&category=${encodeURIComponent(
                categoryKw
              )}&page=0&size=800&sort=${buttonType},desc`,
              {
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem(
                    ACCESS_TOKEN
                  )}`,
                },
              }
            );
            console.log(
              `/api/stores/simple?location=${encodeURIComponent(
                locationKw
              )}&category=${encodeURIComponent(
                categoryKw
              )}&page=0&size=800&sort=${buttonType},desc`
            );
            setAllItem(response.data.content);
          } else {
            const response = await request.get(
              `/api/stores/simple?location=${encodeURIComponent(
                locationKw
              )}&category=${encodeURIComponent(
                categoryKw
              )}&page=0&size=800&sort=${buttonType},desc`,
              {
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem(
                    ACCESS_TOKEN
                  )}`,
                },
              }
            );
            console.log(
              `/api/stores/simple?location=${encodeURIComponent(
                locationKw
              )}&category=${encodeURIComponent(
                categoryKw
              )}&page=0&size=800&sort=${buttonType},desc`
            );
            setAllItem(response.data.content);
          }
        }
      }
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };
  const sortClick = async (props) => {
    await setButtonType(props); // 버튼 타입 변경 (비동기로 실행)
    sortBest(); // sortBest 함수 호출
    console.log(buttonType);
  };
  // const sortClick = (props) => {
  //   setButtonType(props);
  //   {
  //     props === "bookmarks" && sortBest(props);
  //   }
  //   {
  //     props === "reviews" && sortBest(props);
  //   }

  //   console.log(buttonType);
  // };

  const handleSelectChange1 = (event) => {
    setLocationKw(event.target.value); // 선택된 값 업데이트
  };
  const handleSelectChange2 = (event) => {
    setCategoryKw(event.target.value); // 선택된 값 업데이트
  };

  //지역이 변할때
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (buttonType !== "") {
          console.log(buttonType);
          sortClick(buttonType);
        } else {
          if (buttonType === "bookmarks") {
            sortClick("bookmarks");
          } else {
            if (locationKw === "" && categoryKw === "") {
              const response = await request.get(
                "/api/stores/simple?page=0&size=800&sort=id,desc",
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      ACCESS_TOKEN
                    )}`,
                  },
                }
              );
              console.log();
              setAllItem(response.data.content);
            } else {
              if (locationKw !== "" && categoryKw === "") {
                const response = await request.get(
                  `/api/stores/simple?location=${locationKw}&page=0&size=800&sort=id,desc`,
                  {
                    headers: {
                      Authorization: `Bearer ${window.localStorage.getItem(
                        ACCESS_TOKEN
                      )}`,
                    },
                  }
                );
                setAllItem(response.data.content);
              } else {
                if (locationKw === "" && categoryKw !== "") {
                  const response = await request.get(
                    `/api/stores/simple?category=${categoryKw}&page=0&size=800&sort=id,desc`,
                    {
                      headers: {
                        Authorization: `Bearer ${window.localStorage.getItem(
                          ACCESS_TOKEN
                        )}`,
                      },
                    }
                  );
                  setAllItem(response.data.content);
                } else {
                  const response = await request.get(
                    `/api/stores/simple?location=${locationKw}&category=${categoryKw}&page=0&size=800&sort=id,desc`,
                    {
                      headers: {
                        Authorization: `Bearer ${window.localStorage.getItem(
                          ACCESS_TOKEN
                        )}`,
                      },
                    }
                  );
                  setAllItem(response.data.content);
                }
              }
            }
          }
        }
        console.log("데이터:11", allItem);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locationKw, categoryKw]);
  return (
    <>
      <itemS.TitleWrap type="best">
        <itemS.TitleText>STORE ALL</itemS.TitleText>
      </itemS.TitleWrap>
      <itemS.SortContainer>
        <div style={{ display: "flex" }}>
          <itemS.StyleSelect name="location" onChange={handleSelectChange1}>
            <option hidden value="default">
              지역
            </option>
            <option value="서울">서울</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="충청남도">충청남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>
            <option value="전라북도">전라북도</option>
            <option value="전라남도">전라남도</option>
            <option value="세종">세종</option>
            <option value="인천">인천</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="광주">광주</option>
            <option value="제주">제주</option>
          </itemS.StyleSelect>
          <itemS.StyleSelect name="category" onChange={handleSelectChange2}>
            <option hidden value="default">
              카테고리
            </option>
            <option value="카페">카페</option>
            <option value="친환경생필품">친환경생필품</option>
            <option value="식당">식당</option>
            <option value="리필샵">리필샵</option>
            <option value="기타">기타</option>
          </itemS.StyleSelect>
        </div>
        <div
          style={{
            display: "flex",
            width: "132px",
            justifyContent: "space-between",
          }}
        >
          <itemS.SortText onClick={() => sortClick("bookmarks")}>
            인기순
          </itemS.SortText>
          <itemS.overline type="sero"></itemS.overline>
          <itemS.SortText onClick={() => sortClick("reviews")}>
            후기순
          </itemS.SortText>
        </div>
      </itemS.SortContainer>
      <itemS.ItemsWrapper type="all">
        {currentItems.map((item, index) => (
          <StoreCard key={index} type="best" data={item} />
        ))}
      </itemS.ItemsWrapper>
      <itemS.PaginationWrapper>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={allItem.length}
          onChange={handlePageChange}
          hideFirstLastPages={true}
        />
      </itemS.PaginationWrapper>
    </>
  );
}

export default AllItem;
