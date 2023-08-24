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
                `/api/products/auth/simple?keyword=${prop}&page=0&size=2`,
                {
                  headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                      ACCESS_TOKEN
                    )}`,
                  },
                }
              )
            : await request.get(
                `/api/products/simple?keyword=${prop}&page=0&size=2`,
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
  return (
    <SearchP.Wrapper>
      <SearchP.Div>
        <h2>Product</h2>
        <SearchP.Box type={content}>
          <SearchP.Btns>
            <SearchP.Btn>인기순</SearchP.Btn>|<SearchP.Btn>후기순</SearchP.Btn>|
            <SearchP.Btn>가격 높은 순</SearchP.Btn>|
            <SearchP.Btn>가격 낮은 순</SearchP.Btn>
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
