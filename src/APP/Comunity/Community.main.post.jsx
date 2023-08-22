import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as itemS from "./Styled/Community.main.post.styles";
import { FaStar, FaRegStar, FaHome } from 'react-icons/fa';
import request from '../Api/request';
import Pagination from "react-js-pagination";


function Post() {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;

  const handleMore = () => {
    navigate("/write_post", { state: { type } });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < count ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
    return stars;
  };

	const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
	const [completeKeyword, setCompleteSearchKeyword] = useState(""); // 검색어 상태

	// 검색 기능을 처리하는 함수
	const handleSearch = async () => {
		setCompleteSearchKeyword(searchKeyword);
		try {
			let response;
	
			if (type === "best") {
				response = await request.get(`/api/posts/search?keyword=${searchKeyword}&page=0&size=3005&sort=hits,desc`);
				setBestResponse(response.data.content);
			} else if (type === "storereview") {
				response = await request.get(`/api/reviews/all?type=store&keyword=${searchKeyword}&page=0&size=3005&sort=id,desc`);
				setStoreReviewsResponse(response.data.content);
			} else if (type === "productreview") {
				response = await request.get(`/api/reviews/all?type=product&keyword=${searchKeyword}&page=0&size=3005&sort=id,desc`);
				setProductReviewsResponse(response.data.content);
			} else if (type === "community") {
				response = await request.get(`/api/posts/search?keyword=${searchKeyword}&page=0&size=3005&sort=id,desc`);
				setPostResponse(response.data.content);
			}
	
			setCurrentPage(1);
	
		} catch (error) {
			console.error('Error searching data:', error);
		}
	};
	


	const [storeReviewsResponse, setStoreReviewsResponse] = useState([]); //스토어 리뷰
  const [productReviewsResponse, setProductReviewsResponse] = useState([]); //제품 리뷰
  const [bestResponse, setBestResponse] = useState([]); //베스트 게시글
  const [postResponse, setPostResponse] = useState([]); //게시글

	// 페이지네이션 관련 상태
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	// 현재 페이지의 리뷰 목록 계산
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	let currentItems = [];

  if (type === "best") {
    currentItems = bestResponse.slice(startIndex, endIndex);
  } else if (type === "storereview") {
    currentItems = storeReviewsResponse.slice(startIndex, endIndex);
  } else if (type === "productreview") {
    currentItems = productReviewsResponse.slice(startIndex, endIndex);
  } else if (type === "community") {
    currentItems = postResponse.slice(startIndex, endIndex);
  }

	// 페이지 변경 시 호출되는 함수
	const handlePageChange = (pageNumber) => {
			setCurrentPage(pageNumber);
	};

	useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'best') {
					const bestResponse = await request.get('/api/posts/search?page=0&size=3005&sort=hits,desc');
					setBestResponse(bestResponse.data.content);
					console.log('bestResponse', bestResponse);
        } else if (type === 'storereview') {
					const storeReviewsResponse = await request.get('/api/reviews/all?type=store&page=0&size=3005&sort=id,desc');
					setStoreReviewsResponse(storeReviewsResponse.data.content);
					console.log('storeReviewsResponse', storeReviewsResponse);
        } else if (type === 'productreview') {
					const productReviewsResponse = await request.get('/api/reviews/all?type=product&page=0&size=3005&sort=id,desc');
					setProductReviewsResponse(productReviewsResponse.data.content);
					console.log('productReviewsResponse', productReviewsResponse);   
        } else if (type === 'community') {
					const postResponse = await request.get('/api/posts/search?page=0&size=3005&sort=id,desc');
					setPostResponse(postResponse.data.content);
					console.log('postResponse', postResponse);  
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when 'type' changes
    fetchData();
  }, [type]);

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Community</itemS.Title>
        {type === "best" && (
					<React.Fragment>
						<itemS.ContentWrapper>
							<itemS.SubTitle>BEST POST</itemS.SubTitle>
							<itemS.WriteButton onClick={() => handleMore()}>
								글쓰기
							</itemS.WriteButton>
						</itemS.ContentWrapper>
						{completeKeyword && ( // 검색 키워드가 있는지 확인
							<itemS.keyword>
								{currentItems.length === 0
									? `"${completeKeyword}" 검색 결과가 없습니다 (0)`
									: `"${completeKeyword}" 검색 결과입니다. (${currentItems.length})`
								}
							</itemS.keyword>
						)}
						<itemS.InfoBox>
							{currentItems.map((post, index) => (
								<React.Fragment key={post.id}>
									<itemS.InfoLine>
										<itemS.PostTitle>{post.title}</itemS.PostTitle>
										<itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
										<itemS.PostDate>{post.createdAt}</itemS.PostDate>
									</itemS.InfoLine>
									<itemS.Line></itemS.Line>
								</React.Fragment>
							))}
						</itemS.InfoBox>
					</React.Fragment>
					)}
        {type === "storereview" && (
					<React.Fragment>
						<itemS.ContentWrapper>
						<itemS.SubTitle>ECO-STORE REVIEW</itemS.SubTitle>
							<itemS.WriteButton onClick={() => handleMore()}>
								글쓰기
							</itemS.WriteButton>
						</itemS.ContentWrapper>
						{completeKeyword && ( // 검색 키워드가 있는지 확인
							<itemS.keyword>
								{currentItems.length === 0
									? `"${completeKeyword}" 검색 결과가 없습니다 (0)`
									: `"${completeKeyword}" 검색 결과입니다. (${currentItems.length})`
								}
							</itemS.keyword>
						)}
						<itemS.InfoBox>
							{currentItems.map((post, index) => (
								<React.Fragment key={post.id}>
									<itemS.InfoLine>
										<itemS.PostStar>{renderStars(post.star)}</itemS.PostStar>
										<itemS.PostContent>{post.content}</itemS.PostContent>
										<itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
										<itemS.PostDate>{post.createdAt}</itemS.PostDate>
									</itemS.InfoLine>
									<itemS.Line></itemS.Line>
								</React.Fragment>
							))}
						</itemS.InfoBox>
					</React.Fragment>
					)}
				{type === "productreview" && (
					<React.Fragment>
						<itemS.ContentWrapper>
						<itemS.SubTitle>ECO_PRODUCT REVIEW</itemS.SubTitle>
							<itemS.WriteButton onClick={() => handleMore()}>
								글쓰기
							</itemS.WriteButton>
						</itemS.ContentWrapper>
						{completeKeyword && ( // 검색 키워드가 있는지 확인
							<itemS.keyword>
								{currentItems.length === 0
									? `"${completeKeyword}" 검색 결과가 없습니다 (0)`
									: `"${completeKeyword}" 검색 결과입니다. (${currentItems.length})`
								}
							</itemS.keyword>
						)}
						<itemS.InfoBox>
							{currentItems.map((post, index) => (
								<React.Fragment key={post.id}>
									<itemS.InfoLine>
										<itemS.PostStar>{renderStars(post.star)}</itemS.PostStar>
										<itemS.PostContent>{post.content}</itemS.PostContent>
										<itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
										<itemS.PostDate>{post.createdAt}</itemS.PostDate>
									</itemS.InfoLine>
									<itemS.Line></itemS.Line>
								</React.Fragment>
							))}
						</itemS.InfoBox>
					</React.Fragment>
					)}
				{type === "community" && (
					<React.Fragment>
						<itemS.ContentWrapper>
							<itemS.SubTitle>GREENY COMMUNITY</itemS.SubTitle>
							<itemS.WriteButton onClick={() => handleMore()}>
								글쓰기
							</itemS.WriteButton>
						</itemS.ContentWrapper>
						{completeKeyword && ( // 검색 키워드가 있는지 확인
							<itemS.keyword>
								{currentItems.length === 0
									? `"${completeKeyword}" 검색 결과가 없습니다 (0)`
									: `"${completeKeyword}" 검색 결과입니다. (${currentItems.length})`
								}
							</itemS.keyword>
						)}
						<itemS.InfoBox>
							{currentItems.map((post, index) => (
								<React.Fragment key={post.id}>
									<itemS.InfoLine>
										<itemS.PostTitle>{post.title}</itemS.PostTitle>
										<itemS.PostEmail>{post.writerEmail}</itemS.PostEmail>
										<itemS.PostDate>{post.createdAt}</itemS.PostDate>
									</itemS.InfoLine>
									<itemS.Line></itemS.Line>
								</React.Fragment>
							))}
						</itemS.InfoBox>
					</React.Fragment>
				)}
      </itemS.SignupContentWrapper>
			<itemS.PageSearchWrapper>
				<itemS.PaginationWrapper>
				<Pagination
					activePage={currentPage}
					itemsCountPerPage={itemsPerPage}
					totalItemsCount={
						type === "best"
							? bestResponse.length
							: type === "storereview"
							? storeReviewsResponse.length
							: type === "productreview"
							? productReviewsResponse.length
							: postResponse.length
					}
					onChange={handlePageChange}
					hideFirstLastPages={true}
				/>
				</itemS.PaginationWrapper>
				<itemS.InputWrapper>
        <itemS.InputBox
          placeholder="게시글 검색하기"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <itemS.InputIcon onClick={handleSearch}></itemS.InputIcon>
      </itemS.InputWrapper>
			</itemS.PageSearchWrapper>
    </itemS.SignupWrapper>
  );
}

export default Post;
