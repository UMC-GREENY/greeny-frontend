import React, { useState, useEffect } from 'react';
import * as mystyles from './Likepage';
import LikedProductpage from './LikedProductpage';

function Likepage() {
  const menuArr = [
    {
      name: 'PRODUCTS(00)',
      content: 'I am products',
    },
    {
      name: 'STORE(00)',
      content: 'I am store',
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
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <LikedProductpage></LikedProductpage>
        <hr></hr>
        <p>{menuArr[currentTab].content}</p>
      </mystyles.contentscontainer>
    </mystyles.totalcontainer>
  );
}

export default Likepage;
