import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import * as itemS from "./Styled/Community.main.post.write";


function WritePost() {
	const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [content, setContent] = useState('');


  return (
    <itemS.SignupWrapper>
      <itemS.SignupContentWrapper>
        <itemS.Title>Community</itemS.Title>
				<itemS.SubTitle>글쓰기</itemS.SubTitle>
        <itemS.InfoBox>
          <itemS.InputContainer>
            <itemS.TitleLabel>제목</itemS.TitleLabel>
            <itemS.TitleInput
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.FileLabel>첨부파일</itemS.FileLabel>
            <itemS.FileInput
              type="file"
              placeholder="첨부파일명"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
						<itemS.FileSendButton>파일 첨부하기</itemS.FileSendButton>
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.ContentLabel>본문</itemS.ContentLabel>
            <itemS.ContentInput
              placeholder="본문"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </itemS.InputContainer>
					<itemS.ButtonContainer>
            <itemS.CancelButton>취소하기</itemS.CancelButton>
            <itemS.WriteButton>작성하기</itemS.WriteButton>
          </itemS.ButtonContainer>
				</itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default WritePost;