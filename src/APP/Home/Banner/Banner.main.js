import React from 'react';
import Slider from 'react-slick';
import * as Bannerst from './Banner.main.styles.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SideNav from '../../SideNav/SideNav.main.jsx';
const lifeTipCards = [
  {
    title: `친환경적인\n 라이프 스타일 구축을 위해\n 노력하는 Grenny`,
    img: '/home/mainPicture.png',
  },
  {
    title: `생수병 제대로\n 분리배출 하는 법,\n알고 계신가요?`,
    ti: '#생수병 #맥주병 #음료수병',
    recy: '가능',
    type: '페트',
    num: 1,
    img: '/lifetip/1.png',
  },
  {
    title: '여름 장마철!\n 망가진 우산은 \n어떻게 버릴까요?',
    ti: '#양산',
    recy: '불가능',
    type: '일반쓰레기',
    num: 2,
    img: '/lifetip/2.png',
  },
  {
    title: '매트리스 \n버리는 법을 \n알아봅시다!',
    ti: '#스프링 #메모리폼 #라텍스',
    recy: '불가능',
    type: '대형생활폐기물',
    num: 3,
    img: `/lifetip/3.png`,
  },
  {
    title: '고장 난\n 보조 배터리는\n 어디에 버릴까요?',
    ti: '#휴대용배터리 #리튬이온배터리',
    recy: '가능',
    type: '폐건전지 전용 수거함',
    num: 4,
    content1:
      '고장났거나 성능이 떨어져서 더이상 쓸 수 없는 보조배터리는 일반 건전지와 마찬가지로 반드시 가까운 주민센터, 구청 또는 아파트 단지 내에 설치된 폐건전지 전용 수거함에 버려주세요.' +
      '만약 가까운 곳에 폐건전지 수거함이 없다면 박스 등 한곳에 건전지와 함께 모아두었다가 양이 많아지면 한번에 버려주세요.',
    content2:
      '휴대폰이나 노트북 등을 충전할 때 쓰는 보조배터리는 대부분 리튬이온 배터리입니다.' +
      '리튬이온 배터리는 용량이 크고, 자연 방전이 적지만 충격 등 물리적 압력을 받거나 다른 물질과 접촉해 화학 반응이 일어날 경우 폭발 가능성이 존재하기 때문에 일반쓰레기로 버리면 위험할 수 있습니다.' +
      '또한 보조배터리를 일반쓰레기로 버려서 소각 또는 매립된다면 배터리 내부의 중금속이 대기, 토양, 하천으로 흘러드는 심각한 환경오염을 유발할 수 있습니다.' +
      '보조배터리를 폐건전지 전용 수거함으로 잘 분리배출하면 니켈 등의 금속을 추출하여 재활용하게 됩니다. 재활용 가치도 높고 재활용률도 매우 높은 자원이므로 반드시 폐건전지 전용수거함에 잘 분리배출해주세요.',
    img: `/lifetip/4.png`,
  },
  {
    title: '형광등이 \n나가서 갈았어요! \n다 쓴 형광등 버리는 법?',
    ti: '#삼파장전구 #깨진형광등',
    recy: '불가능',
    type: '형광등 전용 수거함',
    num: 5,
    content1:
      '형광등은 반드시 아파트 단지내 또는 가까운 주민센터 등에 설치된 형광등 전용 수거함으로 버려주세요.' +
      '만약 형광등이 깨졌다면 불연성 쓰레기 봉투에 담아 버려주시고, 깨진 형광등이 수거하는 사람을 다치게 할 수 있으니 쓰레기 봉투가 찢어지지 않게 신문지 등으로 잘 싸서 버려주세요.',
    content2:
      '형광등 내부의 수은은 인체에 매우 유해한 물질입니다. 수은이 공기 중으로 유출되지 않도록 깨지지 않게 버려주세요.' +
      '불연성 쓰레기 봉투는 지역 내 마트, 주민센터, 철물점 등에서 살 수 있어요. 하지만 안파는 곳도 많으니 판매여부를 미리 확인하고 방문하세요.' +
      '불연성 쓰레기 봉투는 해당 지자체에 따라 불연재 쓰레기 봉투, 생활 폐기물 봉투, 특수 종량제 봉투 등으로 이름이 조금씩 다를 수 있어요. 모두 타지 않는 쓰레기를 담는 종량제 봉투라는 것과 마대 재질로 만들어졌다는 것을 기억해주세요.',
    img: `/lifetip/5.png`,
  },
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000,
  };
  console.log('배열:', lifeTipCards);

  return (
    <Slider {...settings}>
      {Array.isArray(lifeTipCards) ? (
        lifeTipCards.map((card) => (
          <Bannerst.BannerWrap key={card.num}>
            <Bannerst.SideNavWrap>
              <SideNav></SideNav>
            </Bannerst.SideNavWrap>

            <Bannerst.MainImg src={card.img} alt={card.title} />
            <Bannerst.SideNavWrap>
              <SideNav></SideNav>
            </Bannerst.SideNavWrap>
            <Bannerst.MainText>
              {card.title.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Bannerst.MainText>
          </Bannerst.BannerWrap>
        ))
      ) : (
        <p>배열이 아닙니다</p>
      )}
    </Slider>
  );
};

export default BannerSlider;
