import React, { useState, useEffect } from 'react';
import * as mystyles from './Likepage';
import LikedProductpage from './LikedProductpage';

function Likepage() {
  const menuArr = [
    {
      name: 'PRODUCTS(00)',
      content1: 'Product Name',
      content2: '$100,000',
      imgsrc: './pages/product1.jpeg',
    },
    {
      name: 'STORE(00)',
      content1: '지역',
      content2: '카테고리',
      imgsrc: './pages/Rectangle 8.png',
    },
  ];
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = (index) => {
    clickTab(index);
    alert('hi!');
  };
  return (
    <mystyles.totalcontainer>
      <mystyles.Login style={{ fontFamily: 'Merriweather' }}>
        Like
      </mystyles.Login>
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
          </ul>
        ))}
      </mystyles.tabwrapper>
      <mystyles.contentscontainer>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
        <LikedProductpage
          src={menuArr[currentTab].imgsrc}
          title={menuArr[currentTab].name}
          content1={menuArr[currentTab].content1}
          content2={menuArr[currentTab].content2}
        ></LikedProductpage>
      </mystyles.contentscontainer>
    </mystyles.totalcontainer>
  );
}

export default Likepage;
