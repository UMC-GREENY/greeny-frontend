import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"
import Pagination from "react-js-pagination";
import request from "../Api/request";

import ProductCard from "./Category.main.productCard";

function AllItem() {

    const [allItem, setAllItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get('/api/products/simple?page=0&size=800'
                );

                setAllItem(response.data.content);
                console.log('데이터:', allItem);
            } catch (error) {
                console.error('데이터 가져오기 실패', error);
            }
        };
        fetchData();
    }, []);

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
          const response = await request.get('/api/products/simple?page=0&size=800&sort=bookmarks,desc');
          setAllItem(response.data.content);
          console.log('데이터:', allItem);
        } catch (error) {
          console.error('데이터 가져오기 실패', error);
        }
      };

      const sortreview = async () => {
        try {
          const response = await request.get('/api/products/simple?page=0&size=800&sort=reviews,desc');
          setAllItem(response.data.content);
          console.log('데이터:', allItem);
        } catch (error) {
          console.error('데이터 가져오기 실패', error);
        }
      };
      
    return (
        <>
            <itemS.TitleWrap type='best'>
                <itemS.TitleText>All</itemS.TitleText>
            </itemS.TitleWrap>
            <itemS.SortContainer>
                <itemS.SortText onClick={sortBest}>인기순</itemS.SortText>
                <itemS.overline type='sero'></itemS.overline>
                <itemS.SortText onClick={sortreview}>후기순</itemS.SortText>
            </itemS.SortContainer>
            <itemS.ItemsWrapper type='all'>
                {currentItems.map((item, index) => (
                    <ProductCard key={index} type='best' data={item}/>
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