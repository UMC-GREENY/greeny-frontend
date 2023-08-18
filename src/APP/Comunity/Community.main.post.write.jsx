import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import * as itemS from "./Styled/Community.main.post.write";
import request from '../Api/request';
import { ACCESS_TOKEN } from '../Api/request';


function WritePost() {
	const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [content, setContent] = useState('');

  const handleWrite = async () => {
    try {
      const formData = new FormData();
      formData.append('files', file);
      
      const jsonData = {
        title: title,
        content: content,
      };
      const jsonBlob = new Blob([JSON.stringify(jsonData)], {
        type: 'application/json',
      });
      formData.append('body(json)', jsonBlob);

      await request.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`
        },
      })
      .then((res) => {
        console.log("post res:", res);
        if (res.isSuccess) {
          navigate('/post', { state: { type } });
        } else {
          console.error('게시물 작성에 실패했습니다.');
        }
      })

      
    } catch (error) {
      console.error('게시물 작성 중 에러 발생', error);
    }
  };


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
              maxLength={255}
            />
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.FileLabel>첨부파일</itemS.FileLabel>
            <itemS.FileInput
              type="file"
              placeholder="첨부파일명"
              onChange={(e) => setFile(e.target.files[0])}
            />
						<itemS.FileSendButton>파일 첨부하기</itemS.FileSendButton>
          </itemS.InputContainer>
          <itemS.InputContainer>
            <itemS.ContentLabel>본문</itemS.ContentLabel>
            <itemS.ContentInput
              placeholder="본문"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={500}
            />
          </itemS.InputContainer>
					<itemS.ButtonContainer>
            <itemS.CancelButton>취소하기</itemS.CancelButton>
            <itemS.WriteButton onClick={handleWrite}>작성하기</itemS.WriteButton>
          </itemS.ButtonContainer>
				</itemS.InfoBox>
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default WritePost;