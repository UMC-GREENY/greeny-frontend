import React, { useState, useEffect } from 'react';
import * as mystyles from './Styled/Likepage';
import LikeButton from './Likepage.main.clickitem';
function LikedProductpage(props) {
  const { src, title, content1, content2, type } = props;

  return (
    <mystyles.productcontainer>
      <mystyles.productimage src={src}></mystyles.productimage>
      <mystyles.productinfo>
        <mystyles.productinfotitle>{title}</mystyles.productinfotitle>
        <mystyles.productinfodetail className={type}>
          {content1}
        </mystyles.productinfodetail>
        <mystyles.productinfodetail2 className={type}>
          {content2}
        </mystyles.productinfodetail2>
        <mystyles.lastcontainer>
          <LikeButton></LikeButton>
        </mystyles.lastcontainer>
      </mystyles.productinfo>
    </mystyles.productcontainer>
  );
}
export default LikedProductpage;
