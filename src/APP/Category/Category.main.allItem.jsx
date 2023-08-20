import React, { useEffect, useState } from "react";
import * as itemS from "./styles/Category.main.newItem.styles"
import Pagination from "react-js-pagination";

import ProductCard from "./Category.main.productCard";

// // 페이지네이션 관련 상태
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 5;

// // 현재 페이지의 리뷰 목록 계산
// const startIndex = (currentPage - 1) * itemsPerPage;
// const endIndex = startIndex + itemsPerPage;
// const currentReviews = ReviewDummy.slice(startIndex, endIndex);

// // 페이지 변경 시 호출되는 함수
// const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
// };

function AllItem() {
    return (
        <>
            <itemS.TitleWrap type='best'>
                <itemS.TitleText>All</itemS.TitleText>
            </itemS.TitleWrap>
            <itemS.SortContainer>
                <itemS.SortText>인기순</itemS.SortText>
                <itemS.overline type='sero'></itemS.overline>
                <itemS.SortText>후기순</itemS.SortText>
                <itemS.overline type='sero'></itemS.overline>
                <itemS.SortText>가격 높은 순</itemS.SortText>
                <itemS.overline type='sero'></itemS.overline>
                <itemS.SortText>가격 낮은 순</itemS.SortText>
            </itemS.SortContainer>
            <itemS.ItemsWrapper type='all'>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
                <ProductCard type='best'></ProductCard>
            </itemS.ItemsWrapper>
            <itemS.PaginationWrapper>
                <Pagination
                activePage={1}
                itemsCountPerPage={12}
                totalItemsCount={500}
                // onChange={handlePageChange}
                hideFirstLastPages={true}
            />
            </itemS.PaginationWrapper>
            
        </>
    );
}

export default AllItem;