import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mystyles from './Mypage.styles';
import { FaStar } from 'react-icons/fa';

function Mypage() {
  const navigate = useNavigate();
  const handleMore = (type) => {
    navigate('/post', { state: { type } });
  };
  const usercontentinfo = [
    {
      title: '글제목1',
      email: 'idd**@gmail.com',
      date: '2023.00.00',
    },
    {
      title: '글제목2',
      email: 'idd**@gmail.com',
      date: '2024.00.00',
    },
    {
      title: '글제목3',
      email: 'idd**@gmail.com',
      date: '2025.00.00',
    },
    {
      title: '글제목4',
      email: 'idd**@gmail.com',
      date: '2026.00.00',
    },
  ];
  const myreviewinfo = [
    {
      grade: 3,
      content: '리뷰 후기 내용 미리보기',
      email: 'idd**@gmail.com',
      date: '2023.00.00',
    },
    {
      grade: 4,
      content: '리뷰 후기 내용 미리미리미리미리미리보기',
      email: 'idd**@gmail.com',
      date: '2024.00.00',
    },
    {
      grade: 5,
      content: '리뷰리뷰리뷰리뷰 후기 내용 미리보기',
      email: 'idd**@gmail.com',
      date: '2025.00.00',
    },
  ];
  return (
    <mystyles.Div>
      <mystyles.Wrapper>
        <mystyles.Title style={{ fontFamily: 'Merriweather' }}>
          My Page
        </mystyles.Title>
        <mystyles.firstcontainer>
          <mystyles.secondcontainertitle>
            기본정보
          </mystyles.secondcontainertitle>
          <mystyles.firstcontainerbutton
            onClick={() =>
              navigate('/likepage', {
                state: { type: 'likepage', name: '찜페이지' },
              })
            }
          >
            {'>'}
          </mystyles.firstcontainerbutton>
        </mystyles.firstcontainer>
        <hr></hr>
        <mystyles.secondcontainer>
          <mystyles.secondcontainertitle>
            내가 쓴 글({usercontentinfo.length})
          </mystyles.secondcontainertitle>
          <mystyles.thirdcontainer>
            {usercontentinfo.map((content, index) => (
              <mystyles.mycontents key={index}>
                <mystyles.contentstitle>{content.title}</mystyles.contentstitle>
                <mystyles.contentsemail>{content.email}</mystyles.contentsemail>
                <mystyles.contentsdate>{content.date}</mystyles.contentsdate>
              </mystyles.mycontents>
            ))}
          </mystyles.thirdcontainer>
        </mystyles.secondcontainer>
        <hr></hr>
        <hr></hr>
        <mystyles.secondcontainer>
          <mystyles.secondcontainertitle>
            내 후기({myreviewinfo.length})
          </mystyles.secondcontainertitle>
          <mystyles.thirdcontainer>
            {myreviewinfo.map((content, index) => (
              <mystyles.mycontents key={index}>
                <mystyles.reviewstar>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      color={index < content.grade ? 'gold' : 'gray'}
                    />
                  ))}
                </mystyles.reviewstar>
                <mystyles.contentstitle>
                  {content.content}
                </mystyles.contentstitle>
                <mystyles.contentsemail>{content.email}</mystyles.contentsemail>
                <mystyles.contentsdate>{content.date}</mystyles.contentsdate>
              </mystyles.mycontents>
            ))}
          </mystyles.thirdcontainer>
        </mystyles.secondcontainer>
      </mystyles.Wrapper>
    </mystyles.Div>
  );
}

export default Mypage;
