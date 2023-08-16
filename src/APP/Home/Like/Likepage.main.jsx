import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as mystyles from './Styled/Likepage';
import LikedProductpage from './LikedProductpage';
import LikeButton from './Like.main.clickitem';

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

  const [storeList, setStoreList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/members/simple/store-bookmark?page=0&size=2&sort=id,desc')
      .then((response) => {
        setStoreList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Store List', error);
      });

    axios
      .get('/api/members/simple/product-bookmark?page=0&size=2&sort=id,desc')
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Product List', error);
      });
  }, []);

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

            {currentTab === 0
              ? storeList.map((store, index) => (
                  <LikedProductpage
                    key={index}
                    src={store.imgUrl}
                    title={store.name}
                    content1={store.category}
                    content2={store.location}
                  />
                ))
              : productList.map((product, index) => (
                  <LikedProductpage
                    key={index}
                    src={product.imgsrc}
                    title={product.productName}
                    content1={product.storeName}
                    content2={product.price}
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
