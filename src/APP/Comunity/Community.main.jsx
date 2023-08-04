import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from './Styled/Community.main.styles';
import { PostDummy } from './PostDummy';
import { ReviewDummy } from './ReviewDummy';
import { CommunityDummy } from './CommunityDummy';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaStar, FaRegStar, FaHome } from 'react-icons/fa';

function CommunityMain() {
  const navigate = useNavigate();
  const handleMore = (type) => {
    navigate('/post', { state: { type } });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < count ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
    return stars;
  };

  const limitData = (data, limit) => {
    return data.slice(0, limit);
  };

  const limit = 3;

  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Community</itemS.Title>
        <itemS.ContentWrapper>
          <itemS.SubTitle>BEST POST</itemS.SubTitle>
          <itemS.MoreButton onClick={() => handleMore('post')}>
            더보기
          </itemS.MoreButton>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {limitData(PostDummy, limit).map((post, index) => (
            <React.Fragment key={index}>
              <itemS.InfoLine>
                <itemS.PostTitle>{post.title}</itemS.PostTitle>
                <itemS.PostEmail>{post.email}</itemS.PostEmail>
                <itemS.PostDate>{post.date}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>

        <itemS.ContentWrapper>
          <itemS.SubTitle>REVIEW</itemS.SubTitle>
          <itemS.MoreButton onClick={() => handleMore('review')}>
            더보기
          </itemS.MoreButton>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {limitData(ReviewDummy, limit).map((post, index) => (
            <React.Fragment key={index}>
              <itemS.InfoLine>
                <itemS.PostStar>{renderStars(post.star)}</itemS.PostStar>
                <itemS.PostContent>{post.content}</itemS.PostContent>
                <itemS.PostEmail>{post.email}</itemS.PostEmail>
                <itemS.PostDate>{post.date}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>

        <itemS.ContentWrapper>
          <itemS.SubTitle>GREENY COMMUNITY</itemS.SubTitle>
          <itemS.MoreButton onClick={() => handleMore('community')}>
            더보기
          </itemS.MoreButton>
        </itemS.ContentWrapper>

        <itemS.InfoBox>
          {limitData(CommunityDummy, limit).map((post, index) => (
            <React.Fragment key={index}>
              <itemS.InfoLine>
                <itemS.PostTitle>{post.title}</itemS.PostTitle>
                <itemS.PostEmail>{post.email}</itemS.PostEmail>
                <itemS.PostDate>{post.date}</itemS.PostDate>
              </itemS.InfoLine>
              <itemS.Line></itemS.Line>
            </React.Fragment>
          ))}
        </itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default CommunityMain;
