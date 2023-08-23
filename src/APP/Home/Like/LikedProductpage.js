import React, { useState, useEffect } from 'react';
import * as mystyles from './Styled/Likepage';
import LikeButton from './Likepage.main.clickitem';
function LikedProductpage(props) {
  const { id, src, title, content1, content2, type, likestate } = props;
  const [titleLength, setTitleLength] = useState(title.length);
  console.log(id);
  console.log(type);
  useEffect(() => {
    setTitleLength(title.length);
  }, [title]);

  const calculateFontSize = () => {
    if (titleLength < 10) {
      return 21;
    } else if (titleLength < 20) {
      return 18;
    } else {
      return 13;
    }
  };
  return (
    <mystyles.productcontainer>
      <mystyles.productimage>
        <mystyles.productimagereal src={src}></mystyles.productimagereal>
      </mystyles.productimage>
      <mystyles.productinfo>
        <mystyles.productinfotitle style={{ fontSize: calculateFontSize() }}>
          {title}
        </mystyles.productinfotitle>
        <mystyles.productinfodetail className={type}>
          {content1}
        </mystyles.productinfodetail>
        <mystyles.productinfodetail2 className={type}>
          {content2}
        </mystyles.productinfodetail2>
        <mystyles.lastcontainer>
          <LikeButton type={type} id={id} isLike={true} inner={false}></LikeButton>
        </mystyles.lastcontainer>
      </mystyles.productinfo>
    </mystyles.productcontainer>
  );
}
export default LikedProductpage;
