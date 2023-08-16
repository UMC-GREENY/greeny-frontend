import React, { useState, useEffect } from 'react';
import * as mystyles from './Styled/Likepage';

function LikedProductpage(props) {
  const isProductContent = props.title === 'Brand';
  return (
    <mystyles.productcontainer>
      <mystyles.productimage src={props.src}></mystyles.productimage>
      <mystyles.productinfo>
        <mystyles.productinfotitle>{props.title}</mystyles.productinfotitle>
        <mystyles.productinfodetail
          className={isProductContent ? 'product' : 'store'}
        >
          {props.content1}
        </mystyles.productinfodetail>
        <mystyles.productinfodetail
          className={isProductContent ? 'product' : 'store2'}
        >
          {props.content2}
        </mystyles.productinfodetail>
      </mystyles.productinfo>
    </mystyles.productcontainer>
  );
}
export default LikedProductpage;
