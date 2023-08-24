import React, { useEffect, useState } from "react";
import request from "../Api/request";
import Pagination from "react-js-pagination";
import * as SearchS from "./Styled/Search.store.styles";
import { refreshToken } from "../Api/request";
import { ACCESS_TOKEN } from "../Api/request";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import SearchStoreCard from "./Search.storeCard";

function SearchStore({ prop }) {
  const [content, setContent] = useState([]);
  const isSuccess = useRecoilValue(isSuccessState);
  console.log(isSuccess);
  console.log(prop);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const con =
          isSuccess === true
            ? await request.get(
                `/api/stores/auth/simple?keyword=${prop}&page=0&size=6&sort=id,desc`,
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      ACCESS_TOKEN
                    )}`,
                  },
                }
              )
            : await request.get(
                `/api/stores/simple?keyword=${prop}&page=0&size=6&sort=id,desc`,
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      ACCESS_TOKEN
                    )}`,
                  },
                }
              );
        console.log(con);
        console.log(con.data.content);
        setContent(con.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [prop]);

  const sortBest = async () => {
    try {
      if (isSuccess === true) {
        const response = await request.get(
          `/api/stores/auth/simple?keyword=${prop}&page=0&size=6&sort=bookmarks,desc`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        console.log("response best 잘 불러옴:", response.data);
        setContent(response.data.content);
      } else {
        const response = await request.get(
          `/api/stores/simple?keyword=${prop}&page=0&size=6&sort=bookmarks,desc`
        );
        console.log("response:", response.data);
        setContent(response.data.content);
      }
      console.log("데이터:", content);
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };
  const sortreview = async () => {
    try {
      if (isSuccess === true) {
        const response = await request.get(
          `/api/stores/auth/simple?keyword=${prop}&page=0&size=6&sort=reviews,desc`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        console.log("response view 잘 불러옴:", response.data);
        setContent(response.data.content);
      } else {
        const response = await request.get(
          `/api/stores/simple?keyword=${prop}&page=0&size=6&sort=reviews,desc`
        );
        console.log("response:", response.data);
        setContent(response.data.content);
      }
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };
  return (
    <SearchS.Wrapper>
      <SearchS.Div>
        <h2>Eco-Store</h2>
        <SearchS.Box type={content}>
          <SearchS.Btns>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SearchS.StyleSelect name="location">
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
              </SearchS.StyleSelect>
              <SearchS.StyleSelect name="category">
                <option value="1">카페</option>
                <option value="2">친환경생필품</option>
                <option value="3">식당</option>
                <option value="4">리필샵</option>
                <option value="5">기타</option>
              </SearchS.StyleSelect>
            </div>
            <div style={{ display: "flex" }}>
              <SearchS.Btn onClick={sortBest}>인기순</SearchS.Btn>|
              <SearchS.Btn onClick={sortreview}>후기순</SearchS.Btn>
            </div>
          </SearchS.Btns>
          <SearchS.ItemsWrapper>
            {content.length === 0 ? (
              <SearchS.Alert>검색 결과가 없습니다.</SearchS.Alert>
            ) : (
              content.map((item, index) => (
                <SearchStoreCard key={index} type="new" data={item} />
              ))
            )}
          </SearchS.ItemsWrapper>
          {/* <Pagination /> */}
        </SearchS.Box>
      </SearchS.Div>
    </SearchS.Wrapper>
  );
}
export default SearchStore;
