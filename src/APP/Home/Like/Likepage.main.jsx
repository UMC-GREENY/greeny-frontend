import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as mystyles from './Styled/Likepage';
import LikedProductpage from './LikedProductpage';
import LikeButton from './Likepage.main.clickitem';
import request from '../../Api/request';
import { refreshToken } from '../../Api/request';
import { ACCESS_TOKEN } from '../../Api/request';

function Likepage() {
  /*const menuArr = [
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
  ];*/

  const [currentTab, clickTab] = useState('store');

  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  //////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null); // 상태 최상위 레벨로 이동

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await request.get('/api/auth');
        console.log('response', response);
        setIsSuccess(response.isSuccess);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            await refreshToken();
            const response = await request.get('/api/auth');
            setIsSuccess(response.isSuccess);
          } catch (refreshError) {
            console.error('토큰 갱신 중 오류:', refreshError);
          }
        } else {
          console.error('데이터 가져오기 중 오류:', error);
        }
      }
    }

    fetchData();
  }, []);
  //////////////////////////////////////////////////////////
  const [likeStore, setLikeStore] = useState([]);
  useEffect(() => {
    const fetchLikeStore = async () => {
      setLoading(true);
      console.log(request);
      try {
        const response = await request.get(
          'api/members/simple/store-bookmark?page=0&size=9&sort=id,desc',
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        console.log('찜한 스토어 데이터:', response);
        setLikeStore(response.data.content);
        console.log(likeStore);
      } catch (error) {
        console.error('찜한 스토어 목록을 가져오는데 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikeStore();
  }, []);
  //////////////////////////////////////////
  const [likeProduct, setLikeProduct] = useState([]);
  useEffect(() => {
    const fetchLikeProduct = async () => {
      setLoading(true);
      console.log(request);
      try {
        const response = await request.get(
          'api//members/simple/product-bookmark?page=0&size=9&sort=id,desc',
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                ACCESS_TOKEN
              )}`,
            },
          }
        );
        console.log('찜한 제품 데이터:', response);
        setLikeProduct(response.data.content);
        console.log(likeProduct);
      } catch (error) {
        console.error('찜한 제품 목록을 가져오는데 실패!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikeProduct();
  }, []);

  useEffect(() => {
    console.log(likeProduct); // userPosts가 업데이트될 때마다 로그 출력
  }, [likeProduct]); // userPosts를 의존성 배열로 추가;

  const selectedArray = currentTab === 'store' ? likeStore : likeProduct;

  return (
    <mystyles.Div>
      <mystyles.Wrapper>
        <mystyles.Title style={{ fontFamily: 'Merriweather' }}>
          Like
        </mystyles.Title>
        <hr></hr>
        <mystyles.tabwrapper>
          <ul
            style={{
              fontFamily: 'Merriweather',
              fontSize: '16px',
              fontWeight: '500',
              letterSpacing: '0.5px',
            }}
            className={currentTab === 'store' ? 'focused' : 'submenu'}
            onClick={() => selectMenuHandler('store')}
          >
            STORE {'('} {likeStore.length}
            {')'}
          </ul>
          <ul
            style={{
              fontFamily: 'Merriweather',
              fontSize: '16px',
              fontWeight: '500',
              letterSpacing: '0.5px',
            }}
            className={currentTab === 'product' ? 'focused' : 'submenu'}
            onClick={() => selectMenuHandler('product')}
          >
            PRODUCTS{'('} {likeProduct.length}
            {')'}
          </ul>
        </mystyles.tabwrapper>
        <mystyles.contentscontainer>
          <mystyles.contentsinnercontainer>
            {selectedArray.map((item, index) => (
              <LikedProductpage
                type={currentTab === 'store' ? 'store' : 'product'}
                src={currentTab === 'store' ? item.imageUrl : item.imageUrl}
                title={currentTab === 'store' ? item.name : item.productName}
                content2={currentTab === 'store' ? item.category : item.price}
                content1={
                  currentTab === 'store' ? item.location : item.storeName
                }
              />
            ))}
          </mystyles.contentsinnercontainer>

          {/* Pagination and other elements */}
        </mystyles.contentscontainer>
      </mystyles.Wrapper>
    </mystyles.Div>
  );
}

export default Likepage;
