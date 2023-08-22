import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from './Styled/Community.main.post.styles';
import { FaStar, FaRegStar, FaHome } from 'react-icons/fa';
import request from '../Api/request';

function Post() {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;

  const handleMore = () => {
    navigate('/write_post', { state: { type } });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < count ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
    return stars;
  };

  const [storeReviewsResponse, setStoreReviewsResponse] = useState([]); //스토어 리뷰
  const [productReviewsResponse, setProductReviewsResponse] = useState([]); //제품 리뷰
  const [bestResponse, setBestResponse] = useState([]); //베스트 게시글
  const [postResponse, setPostResponse] = useState([]); //게시글

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === 'best') {
          const bestResponse = await request.get(
            '/api/posts/search?page=0&size=5&sort=hits,desc'
          );
          setBestResponse(bestResponse.data.content);
          setFilteredPosts(bestResponse.data.content);
          console.log('bestResponse', bestResponse);
        } else if (type === 'storereview') {
          const storeReviewsResponse = await request.get(
            '/api/reviews/all?type=store&page=0&size=5&sort=id,desc'
          );
          setStoreReviewsResponse(storeReviewsResponse.data.content);
          setFilteredPosts(storeReviewsResponse.data.content);
          console.log('storeReviewsResponse', storeReviewsResponse);
        } else if (type === 'productreview') {
          const productReviewsResponse = await request.get(
            '/api/reviews/all?type=product&page=0&size=5&sort=id,desc'
          );
          setProductReviewsResponse(productReviewsResponse.data.content);
          setFilteredPosts(productReviewsResponse.data.content);
          console.log('productReviewsResponse', productReviewsResponse);
        } else if (type === 'community') {
          const postResponse = await request.get(
            '/api/posts/search?page=0&size=5&sort=id,desc'
          );
          setPostResponse(postResponse.data.content);
          setFilteredPosts(postResponse.data.content);
          console.log('postResponse', postResponse);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when 'type' changes
    fetchData();
  }, [type]);

  /////////////검색
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredPosts([]);
      return;
    }

    const lowercaseSearchQuery = searchQuery.toLowerCase();

    let postsToSearch = [];

    if (type === 'best') {
      postsToSearch = bestResponse;
    } else if (type === 'storereview') {
      postsToSearch = storeReviewsResponse;
    } else if (type === 'productreview') {
      postsToSearch = productReviewsResponse;
    } else if (type === 'community') {
      postsToSearch = postResponse;
    }

    const filtered = postsToSearch.filter((post) => {
      if (post.title) {
        const lowercaseTitle = post.title.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchQuery);
      } else if (post.content) {
        const lowercaseTitle = post.content.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchQuery);
      }
      return false;
    });

    setFilteredPosts(filtered);
  };

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Community</itemS.Title>
        {type === 'best' && (
          <React.Fragment>
            <itemS.ContentWrapper>
              <itemS.SubTitle>BEST POST</itemS.SubTitle>
              <itemS.WriteButton onClick={() => handleMore()}>
                글쓰기
              </itemS.WriteButton>
            </itemS.ContentWrapper>
            <itemS.InfoBox>
              {filteredPosts.map((post, index) => (
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
            <itemS.InputWrapper>
              <itemS.InputBox
                type='best'
                placeholder='검색어를 입력하세요'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></itemS.InputBox>
              <itemS.InputIcon onClick={handleSearch}></itemS.InputIcon>
            </itemS.InputWrapper>
          </React.Fragment>
        )}
        {type === 'storereview' && (
          <React.Fragment>
            <itemS.ContentWrapper>
              <itemS.SubTitle>ECO-STORE REVIEW</itemS.SubTitle>
              <itemS.WriteButton onClick={() => handleMore()}>
                글쓰기
              </itemS.WriteButton>
            </itemS.ContentWrapper>
            <itemS.InfoBox>
              {filteredPosts.map((post, index) => (
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
            <itemS.InputWrapper>
              <itemS.InputBox
                type='storereview'
                placeholder='검색어를 입력하세요'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></itemS.InputBox>
              <itemS.InputIcon onClick={handleSearch}></itemS.InputIcon>
            </itemS.InputWrapper>
          </React.Fragment>
        )}
        {type === 'productreview' && (
          <React.Fragment>
            <itemS.ContentWrapper>
              <itemS.SubTitle>ECO_PRODUCT REVIEW</itemS.SubTitle>
              <itemS.WriteButton onClick={() => handleMore()}>
                글쓰기
              </itemS.WriteButton>
            </itemS.ContentWrapper>
            <itemS.InfoBox>
              {filteredPosts.map((post, index) => (
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
            <itemS.InputWrapper>
              <itemS.InputBox
                type='productreview'
                placeholder='검색어를 입력하세요'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></itemS.InputBox>
              <itemS.InputIcon onClick={handleSearch}></itemS.InputIcon>
            </itemS.InputWrapper>
          </React.Fragment>
        )}
        {type === 'community' && (
          <React.Fragment>
            <itemS.ContentWrapper>
              <itemS.SubTitle>GREENY COMMUNITY</itemS.SubTitle>
              <itemS.WriteButton onClick={() => handleMore()}>
                글쓰기
              </itemS.WriteButton>
            </itemS.ContentWrapper>
            <itemS.InfoBox>
              {filteredPosts.map((post, index) => (
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
            <itemS.InputWrapper>
              <itemS.InputBox
                type='community'
                placeholder='검색어를 입력하세요'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></itemS.InputBox>
              <itemS.InputIcon onClick={handleSearch}></itemS.InputIcon>
            </itemS.InputWrapper>
          </React.Fragment>
        )}
      </itemS.SignupContentWrapper>
      <itemS.PageSearchWrapper>
        <itemS.PaginationBox>
          <itemS.PaginationButton disabled> &lt; </itemS.PaginationButton>
          <itemS.PageNumber>1</itemS.PageNumber>
          <itemS.PageNumber>2</itemS.PageNumber>
          <itemS.PageNumber>3</itemS.PageNumber>
          <itemS.PageNumber>4</itemS.PageNumber>
          <itemS.PageNumber>5</itemS.PageNumber>
          {/* Add more page numbers here based on 'totalPages' */}
          <itemS.PaginationButton> &gt; </itemS.PaginationButton>
        </itemS.PaginationBox>
        <itemS.InputWrapper>
          <itemS.InputBox placeholder='게시글 검색하기'></itemS.InputBox>
          <itemS.InputIcon></itemS.InputIcon>
        </itemS.InputWrapper>
      </itemS.PageSearchWrapper>
    </itemS.SignupWrapper>
  );
}

export default Post;
