import React, { useState, useEffect } from 'react';
import * as mystyles from './Likepage';
import LikedProductpage from './LikedProductpage';

function Likepage() {
  const menuArr = [
    {
      name: 'PRODUCTS',
      subname: 'Brand',
      content1: 'Product Name',
      content2: '$100,000',
      imgsrc: './pages/product1.jpeg',
      count: 9,
    },
    {
      name: 'STORE',
      subname: 'Store name',
      content1: '지역',
      content2: '카테고리',
      imgsrc: './pages/Rectangle 8.png',
      count: 9,
    },
  ];
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <mystyles.Div>
      <mystyles.Wrapper>
        <mystyles.Title style={{ fontFamily: 'Merriweather' }}>
          Like
        </mystyles.Title>
        <hr></hr>
        <mystyles.tabwrapper>
          {menuArr.map((el, index) => (
            <ul
              style={{
                fontFamily: 'Merriweather',
                fontSize: '16px',
                fontWeight: '500',
                letterSpacing: '0.5px',
              }}
              className={index === currentTab ? 'focused' : 'submenu'}
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
              {'('} {el.count}
              {')'}
            </ul>
          ))}
        </mystyles.tabwrapper>
        <mystyles.contentscontainer>
          <mystyles.contentsinnercontainer>
            {Array.from({ length: menuArr[currentTab].count }, (_, i) => (
              <LikedProductpage
                key={i}
                src={menuArr[currentTab].imgsrc}
                title={menuArr[currentTab].subname}
                content1={menuArr[currentTab].content1}
                content2={menuArr[currentTab].content2}
              />
            ))}
          </mystyles.contentsinnercontainer>
          <mystyles.SignupContentWrapper>
            <mystyles.PageSearchWrapper>
              <mystyles.PaginationBox>
                <mystyles.PaginationButton disabled>
                  {' '}
                  &lt;{' '}
                </mystyles.PaginationButton>
                <mystyles.PageNumber>1</mystyles.PageNumber>
                <mystyles.PageNumber>2</mystyles.PageNumber>
                <mystyles.PageNumber>3</mystyles.PageNumber>
                <mystyles.PageNumber>4</mystyles.PageNumber>
                <mystyles.PageNumber>5</mystyles.PageNumber>
                {/* Add more page numbers here based on 'totalPages' */}
                <mystyles.PaginationButton> &gt; </mystyles.PaginationButton>
              </mystyles.PaginationBox>
            </mystyles.PageSearchWrapper>
          </mystyles.SignupContentWrapper>
        </mystyles.contentscontainer>
      </mystyles.Wrapper>
    </mystyles.Div>
  );
}

export default Likepage;
