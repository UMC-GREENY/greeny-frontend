import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import * as itemS from "./Styled/Community.main.post.styles";
import { PostDummy } from "./PostDummy";
import { ReviewDummy } from "./ReviewDummy";
import { CommunityDummy } from "./CommunityDummy";

function Post() {
	const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;
	
	const handleMore = () => {
    navigate('/write_post', { state: { type } });
  };
	
  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Community</itemS.Title>
        {type === "post" && (
					<itemS.SubTitle>BEST POST</itemS.SubTitle>
					)}
        {type === "review" && (
					<itemS.SubTitle>REVIEW</itemS.SubTitle>
					)}
				{type === "community" && (
					<React.Fragment>
						<itemS.ContentWrapper>
							<itemS.SubTitle>GREENY COMMUNITY</itemS.SubTitle>
							<itemS.WriteButton onClick={() => handleMore()}>
								글쓰기
							</itemS.WriteButton>
						</itemS.ContentWrapper>
						<itemS.InfoBox>
							{CommunityDummy.map((post, index) => (
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
					<itemS.InputBox placeholder="게시글 검색하기"></itemS.InputBox>
					<itemS.InputIcon></itemS.InputIcon>
				</itemS.InputWrapper>
			</itemS.PageSearchWrapper>
    </itemS.SignupWrapper>
  );
}

export default Post;