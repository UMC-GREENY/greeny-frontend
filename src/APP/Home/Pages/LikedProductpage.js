import React, { useState, useEffect } from 'react';
import * as mystyles from './Likepage';

function LikedProductpage() {
  return (
    <mystyles.productcontainer>
      <mystyles.productimage src='public\pages\product1.jpeg'></mystyles.productimage>
      <mystyles.productinfo>Brand</mystyles.productinfo>
    </mystyles.productcontainer>
  );
}
export default LikedProductpage;
