import Pagination from "react-js-pagination";
import * as SearchP from "./Styled/Search.product.styles";
import SearchProductCard from "./Search.productCard";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
import request from "../Api/request";
import { ACCESS_TOKEN } from "../Api/request";

function SearchProduct({ prop }) {
  const [content, setContent] = useState([]);
  const isSuccess = useRecoilValue(isSuccessState);
  console.log(isSuccess);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const con =
          isSuccess === true
            ? await request.get(
                `/api/products/auth/simple?keyword=${prop}&page=0&size=6&sort=id,desc`,
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      ACCESS_TOKEN
                    )}`,
                  },
                }
              )
            : await request.get(
                `/api/products/simple?keyword=${prop}&page=0&size=6&sort=id,desc`,
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      ACCESS_TOKEN
                    )}`,
                  },
                }
              );
        setContent(con.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(content, "con");
  }, [prop]);
  const sortBest = async () => {
    try {
      if (isSuccess === true) {
        const response = await request.get(
          `/api/products/auth/simple?keyword=${prop}&page=0&size=6&sort=bookmarks,desc`,
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
          `/api/products/simple?keyword=${prop}&page=0&size=6&sort=bookmarks,desc`
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
          `/api/products/auth/simple?keyword=${prop}page=0&size=6&sort=reviews,desc`,
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
          `/api/products/simple?keyword=${prop}&page=0&size=6&sort=reviews,desc`
        );
        console.log("response:", response.data);
        setContent(response.data.content);
      }
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };
  const sortPriceUp = async () => {
    try {
      if (isSuccess === true) {
        const response = await request.get(
          `/api/products/auth/simple?keyword=${prop}&page=0&size=6&sort=price,desc`,
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
          `/api/products/simple?keyword=${prop}&page=0&size=6&sort=price,desc`
        );
        console.log("response:", response.data);
        setContent(response.data.content);
      }
      console.log("데이터:", content);
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };
  const sortPriceDown = async () => {
    try {
      if (isSuccess === true) {
        const response = await request.get(
          `/api/products/auth/simple?keyword=${prop}&page=0&size=6&sort=price`,
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
          `/api/products/simple?keyword=${prop}&page=0&size=6&sort=price`
        );
        console.log("response:", response.data);
        setContent(response.data.content);
      }

      console.log("데이터:", content);
    } catch (error) {
      console.error("데이터 가져오기 실패", error);
    }
  };

  return (
    <SearchP.Wrapper>
      <SearchP.Div>
        <h2>Product</h2>
        <SearchP.Box type={content}>
          <SearchP.Btns>
            <SearchP.Btn onClick={sortBest}>인기순</SearchP.Btn>|
            <SearchP.Btn onClick={sortreview}>후기순</SearchP.Btn>|
            <SearchP.Btn onClick={sortPriceUp}>가격 높은 순</SearchP.Btn>|
            <SearchP.Btn onClick={sortPriceDown}>가격 낮은 순</SearchP.Btn>
          </SearchP.Btns>

          <SearchP.ItemsWrapper>
            {content.length === 0 ? (
              <SearchP.Alert>검색 결과가 없습니다.</SearchP.Alert>
            ) : (
              content.map((item, index) => (
                <SearchProductCard key={index} type="new" data={item} />
              ))
            )}
          </SearchP.ItemsWrapper>
          {/* <Pagination /> */}
        </SearchP.Box>
      </SearchP.Div>
    </SearchP.Wrapper>
  );
}
export default SearchProduct;
