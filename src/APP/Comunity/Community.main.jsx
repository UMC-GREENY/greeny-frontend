import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as itemS from "./Styled/Community.main.styles";
import { PostDummy } from "./PostDummy";
import { ReviewDummy } from "./ReviewDummy";
import { CommunityDummy } from "./CommunityDummy";

function CommunityMain() {
  const navigate = useNavigate();
  const handleMore = (type) => {
    navigate("/post", { state: { type } });
  };

  return (
    <div>
      <itemS.JoinHeading>Community</itemS.JoinHeading>

      <itemS.ContentWrapper>
        <itemS.LabelContainer>
          <itemS.BasicInfoHeading>BEST POST</itemS.BasicInfoHeading>
        </itemS.LabelContainer>
        <itemS.MoreButton onClick={() => handleMore("post")}>
          더보기
        </itemS.MoreButton>
      </itemS.ContentWrapper>

      <itemS.InfoBox>
        {PostDummy.map((post, index) => (
          <React.Fragment key={index}>
            <itemS.InfoLine>
              <itemS.PostTitle>{post.title}</itemS.PostTitle>
              <itemS.PostEmail>{post.email}</itemS.PostEmail>
              <itemS.PostDate>{post.date}</itemS.PostDate>
            </itemS.InfoLine>
          </React.Fragment>
        ))}
      </itemS.InfoBox>

      <itemS.ContentWrapper>
        <itemS.LabelContainer>
          <itemS.BasicInfoHeading>REVIEW</itemS.BasicInfoHeading>
        </itemS.LabelContainer>
        <itemS.MoreButton onClick={() => handleMore("review")}>
          더보기
        </itemS.MoreButton>
      </itemS.ContentWrapper>

      <itemS.InfoBox>
        {/* {ReviewDummy.map((post, index) => (
          <React.Fragment key={index}>
            <itemS.InfoLine>
            <itemS.PostTitle>{post.star}</itemS.PostTitle>
              <itemS.PostTitle>{post.title}</itemS.PostTitle>
              <itemS.PostEmail>{post.email}</itemS.PostEmail>
              <itemS.PostDate>{post.date}</itemS.PostDate>
            </itemS.InfoLine>
          </React.Fragment>
        ))} */}
      </itemS.InfoBox>

      <itemS.ContentWrapper>
        <itemS.LabelContainer>
          <itemS.BasicInfoHeading>GREENY COMMUNITY</itemS.BasicInfoHeading>
        </itemS.LabelContainer>
        <itemS.MoreButton onClick={() => handleMore("community")}>
          더보기
        </itemS.MoreButton>
      </itemS.ContentWrapper>

      <itemS.InfoBox>
        {CommunityDummy.map((post, index) => (
          <React.Fragment key={index}>
            <itemS.InfoLine>
              <itemS.PostTitle>{post.title}</itemS.PostTitle>
              <itemS.PostEmail>{post.email}</itemS.PostEmail>
              <itemS.PostDate>{post.date}</itemS.PostDate>
            </itemS.InfoLine>
          </React.Fragment>
        ))}
      </itemS.InfoBox>
    </div>
  );
}

export default CommunityMain;