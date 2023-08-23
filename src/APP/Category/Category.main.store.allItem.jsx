import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles";
import Pagination from "react-js-pagination";
import request from "../Api/request";

import StoreCard from "./Category.main.storeCard";
// import Dropdown from "./Category.main.dropdown";

function AllItem() {
  const [allItem, setAllItem] = useState([]);

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
    try {
      const response = await request.get(
        "/api/stores/simple?page=0&size=800&sort=bookmarks,desc"
      );
      setAllItem(response.data.content);
      console.log("데이터:", allItem);
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };

  const sortreview = async () => {
    try {
      const response = await request.get(
        "/api/stores/simple?page=0&size=800&sort=reviews,desc"
      );
      setAllItem(response.data.content);
      console.log("데이터:", allItem);
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };

  return (
    <>
      <itemS.TitleWrap type="best">
        <itemS.TitleText>STORE ALL</itemS.TitleText>
      </itemS.TitleWrap>
      <itemS.SortContainer>
        <div>
          <itemS.StyleSelect name="location">
            <option value="1">서울</option>
            <option value="2">경기도</option>
            <option value="3">강원도</option>
            <option value="4">충청북도</option>
            <option value="5">충청남도</option>
            <option value="6">경상북도</option>
            <option value="7">경상남도</option>
            <option value="8">전라북도</option>
            <option value="9">전라남도</option>
            <option value="10">세종</option>
            <option value="11">인천</option>
            <option value="12">대전</option>
            <option value="13">울산</option>
            <option value="14">부산</option>
            <option value="15">대구</option>
            <option value="16">광주</option>
            <option value="17">제주</option>
          </itemS.StyleSelect>
          <itemS.StyleSelect name="category">
            <option value="1">카페</option>
            <option value="2">친환경생필품</option>
            <option value="3">식당</option>
            <option value="4">리필샵</option>
            <option value="5">기타</option>
          </itemS.StyleSelect>
        </div>
        <div
          style={{
            display: "flex",
            width: "132px",
            justifyContent: "space-between",
          }}
        >
          <itemS.SortText onClick={sortBest}>인기순</itemS.SortText>
          <itemS.overline type="sero"></itemS.overline>
          <itemS.SortText onClick={sortreview}>후기순</itemS.SortText>
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
