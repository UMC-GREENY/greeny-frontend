import React, { useState, useEffect } from 'react';
import * as mystyles from './Likepage';

function LikedProductpage(props) {
  return (
    <mystyles.productcontainer>
      <mystyles.productimage src={props.src}></mystyles.productimage>
      <mystyles.productinfo>
        <mystyles.productinfodetail>{props.title}</mystyles.productinfodetail>
        <mystyles.productinfodetail>
          {props.content1}
        </mystyles.productinfodetail>
        <mystyles.productinfodetail>
          {props.content2}
        </mystyles.productinfodetail>
      </mystyles.productinfo>
    </mystyles.productcontainer>
  );
}
export default LikedProductpage;
