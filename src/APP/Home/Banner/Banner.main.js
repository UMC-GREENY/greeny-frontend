import React from 'react';
import Slider from 'react-slick';
import * as Bannerst from './Banner.main.styles.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SideNav from '../../SideNav/SideNav.main.jsx';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const LinkWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-left: 1300px;
  width: 120px;
  ${(props) =>
    props.type === 'store'
      ? `
  top: 1600px;`
      : `
    top: 3929px;
    `}
`;

export const LinkSpan = styled.span`
  font-family: Pretendard;
  color: #666666;
  ${(props) =>
    props.type === 'more'
      ? `
    width: 90px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;`
      : `
    width: 24px;
    height: 24px;
    `}
`;
const lifeTipCards = [
  {
    title: `친환경적인\n 라이프 스타일 구축을 위해\n 노력하는 Greenny`,
    num: 0,
    class: 0,
    img: '/home/mainPicture.png',
  },
  {
    title: `생수병 제대로\n 분리배출 하는 법,\n알고 계신가요?`,
    ti: '#생수병 #맥주병 #음료수병',
    recy: '가능',
    type: '페트',
    num: 1,
    class: 0,
    img: '/lifetip/1.png',
  },
  {
    title: '여름 장마철!\n 망가진 우산은 \n어떻게 버릴까요?',
    ti: '#양산',
    recy: '불가능',
    type: '일반쓰레기',
    num: 2,
    class: 0,
    img: '/lifetip/2.png',
  },
  {
    title: '매트리스 \n버리는 법을 \n알아봅시다!',
    ti: '#스프링 #메모리폼 #라텍스',
    recy: '불가능',
    type: '대형생활폐기물',
    num: 3,
    class: 1,
    img: `/lifetip/3.png`,
  },
  {
    title: '고장 난\n 보조 배터리는\n 어디에 버릴까요?',
    ti: '#휴대용배터리 #리튬이온배터리',
    recy: '가능',
    type: '폐건전지 전용 수거함',
    num: 4,
    class: 1,
    img: `/lifetip/4.png`,
  },
  {
    title: '형광등이\n 나가서 갈았어요!\n 다 쓴 형광등 버리는 법?',
    ti: '#삼파장전구 #깨진형광등',
    recy: '불가능',
    type: '형광등 전용 수거함',
    num: 5,
    class: 1,
    img: `/lifetip/5.png`,
  },
  {
    title: '깨진 유리는\n 불연성 쓰레기로\n 분류됩니다',
    ti: '#깨진유리 #깨진그릇',
    recy: '불가능',
    type: '불연성 쓰레기',
    num: 6,
    class: 0,
    img: `/lifetip/6.png`,
  },
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 30,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  const navigate = useNavigate();
  const handleNavigateLifetip = () => {
    navigate('/lifetip');
  };
  return (
    <Slider {...settings}>
      {Array.isArray(lifeTipCards) ? (
        lifeTipCards.map((card) => (
          <Bannerst.BannerWrap key={card.num}>
            <Bannerst.MainImg src={card.img} alt={card.title} />
            <Bannerst.SideNavWrap>
              <SideNav
                className={card.class === 0 ? 'whitest' : 'blackst'}
              ></SideNav>
            </Bannerst.SideNavWrap>
            <Bannerst.MainText
              className={card.class === 0 ? 'whitest' : 'blackst'}
            >
              {card.title.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Bannerst.MainText>
            <Bannerst.LinkWrapperr
              className={card.class === 0 ? 'whitest' : 'blackst'}
              onClick={handleNavigateLifetip}
            >
              더 알아보기<div>{'>'}</div>
            </Bannerst.LinkWrapperr>
          </Bannerst.BannerWrap>
        ))
      ) : (
        <p>배열이 아닙니다</p>
      )}
    </Slider>
  );
};

export default BannerSlider;
