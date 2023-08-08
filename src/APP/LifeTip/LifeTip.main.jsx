import { useState } from "react";
import LifeTipCard from "./LifeTip.main.card";
import LifeTipMainTitle from "./LifeTip.main.title";
import * as mainS from "./Styled/LifeTip.main.styles";

function LifeTip() {
  const [num, setNum] = useState(1);
  console.log(num);
  return (
    <mainS.Div>
      <mainS.Wrapper>
        <LifeTipMainTitle />
        <mainS.Main>
          {num == 1 && (
            <mainS.MainCon>
              <LifeTipCard
                title={"1: 생수병 제대로 분리배출 하는 법, 알고 계신가요?"}
                ti={"#생수병 #맥주병 #음료수병"}
                recy={"가능"}
                type={"페트"}
                num={1}
                content1={
                  "투명 페트병(생수병, 콜라, 사이다, 쥬스 등의 음료수병)과 유색 페트병(갈색 맥주병, 녹색 소주병, 녹색 사이다병 등)은 분리배출 방법이 달라요." +
                  "투명 페트병 (생수, 콜라, 사이다, 쥬스 등): 1. 내용물을 비우고 물로 깨끗이 세척해요. 2. 페트병 겉면에 붙어있는 상표 등의 비닐 라벨은 깨끗이 떼어내서 비닐류로 분리배출해요.-페트병은 최대한 압축해서 뚜껑을 닫은 후 페트로 분리배출해요." +
                  "유색 페트병 (맥주, 소주, 사이다 등): 1. 내용물을 비우고, 물로 내부를 깨끗이 세척해요. 2. 페트병 겉면에 붙어있는 상표 등의 비닐 라벨은 깨끗이 떼어내서 비닐류로 분리배출해요.-페트병은 최대한 압축해서 플라스틱으로 배출해요.-페트병은 최대한 압축해서 플라스틱으로 배출해요.(페트병 뚜껑은 닫고 함께 버려도, 따로 분리해서 버려도 무방합니다.)"
                }
                content2={
                  "- 페트병 뚜껑과 병 입구에 남아있는 링은 따로 제거하지 않아도 됩니다. 페트병 뚜껑은 일반 플라스틱 재질(HDPE)이고, 크기가 작아 재활용이 불가능하지만 파쇄 후 선별 과정에서 자동으로 분리가 된다고 합니다" +
                  "- 페트병을 최대한 압축해서 배출하면 부피가 줄어들어 수거 업체의 운송/압축/보관 과정에 큰 도움이 됩니다."
                }
                img={`/lifetip/1.png`}
              />
              <LifeTipCard
                title={"2: 여름 장마철! 망가진 우산은 어떻게 버릴까요?"}
                ti={"#양산"}
                recy={"불가능"}
                type={"일반쓰레기"}
                num={2}
                content1={
                  "우산은 플라스틱, 알루미늄, 합성섬유 등 여러 재질이 섞여있어 재활용이 불가능하니 통째로 일반쓰레기(종량제봉투)로 버려주세요." +
                  "가위나 칼을 이용해 우산 천(또는 비닐)과 우산대(우산살)를 분리하면 재질에 따라 분리배출이 가능할 수도 있지만 우산대에 알루미늄과 함께 유리섬유(파이버글래스)를 사용하는 경우가 많아 분리과정에서 유리섬유가 손에 박히거나 하는 위험성이 있습니다. (Seung6109님 제보)" +
                  "기가 커서 종량제봉투에 담을 수 없는 우산은 주민센터, 시/군/구청을 통해 대형생활폐기물로 신고/배출해주세요."
                }
                content2={
                  "자동 우산은 우산대가 펴져서 종량제봉투를 찢고 나올 가능성이 있으니 우산대를 끈으로 묶어서 고정시킨 후 배출해주세요." +
                  "일반쓰레기로 버려진 소형 철제류는 폐기장에서 1차 소각 후 타지 않고 남은 고철류를 자력선별기(대형자석)로 한번 더 수거하는 과정을 거친다고 합니다." +
                  "대형생활폐기물 신고 및 수거는 유료이며, 크기와 무게에 따라 1,000원-10,000원 가량이 부과됩니다." +
                  "대형생활폐기물은 주민센터, 구청 등의 지자체에 신고 후 (웹사이트 또는 직접 방문) 폐기물 스티커를 인쇄하거나 발급받아 집 밖으로 옮겨두면 폐기물 수거 업체에서 1-2일 내에 수거해 갑니다." +
                  "스티커를 발급받지 않고 길거리, 야산, 쓰레기 수거 장소에 몰래 버릴 경우 수거가 되지 않을 뿐만 아니라 무단 투기로 간주되어 폐기물관리법에 의거해 100만원 이하의 과태료가 부과됩니다."
                }
                img={`/lifetip/2.png`}
              />
              <LifeTipCard
                title={"3: 매트리스 버리는 법을 알아봅시다"}
                ti={"#스프링 #메모리폼 #라텍스"}
                recy={"불가능"}
                type={"대형생활폐기물"}
                num={3}
                content1={
                  "스프링, 메모리폼, 라텍스 등으로 이루어진 침대 매트리스는 분리 및 재활용이 불가능해요. 대형 생활 폐기물로 신고 배출해주세요." +
                  "매트리스 커버, 토퍼 등은 제거한 후 배출해요." +
                  "사용기간이 10년 미만이고, 비교적 상태가 좋은 가구는 한국그린센터(→무료수거 절차 알아보기) 등의 기업을 통해 무료 수거를 신청할 수 있습니다. (현재 서울, 경기도 일부 지역에 한해 수거 가능)"
                }
                content2={
                  "대형 생활 폐기물 신고 및 수거는 유료이며, 가구의 크기에 따라 2,000원-10,000원 가량이 부과됩니다." +
                  "대형 생활 폐기물은 주민센터, 구청 등의 지자체에 신고 후 (웹사이트 또는 직접 방문) 폐기물 스티커를 인쇄하거나 발급받아 집 밖으로 옮겨두면 폐기물 수거 업체에서 1-2일 내에 수거해 갑니다." +
                  "스티커를 발급받지 않고 길거리, 야산, 쓰레기 수거 장소에 몰래 버릴 경우 수거가 되지 않을 뿐만 아니라 무단 투기로 간주되어 폐기물관리법에 의거해 100만원 이하의 과태료가 부과됩니다."
                }
                img={`/lifetip/3.png`}
              />
              <LifeTipCard
                title={"4: 고장 난 보조 배터리는 어디에 버릴까요?"}
                ti={"#휴대용배터리 #리튬이온배터리"}
                recy={"가능"}
                type={"폐건전지 전용 수거함"}
                num={4}
                content1={
                  "고장났거나 성능이 떨어져서 더이상 쓸 수 없는 보조배터리는 일반 건전지와 마찬가지로 반드시 가까운 주민센터, 구청 또는 아파트 단지 내에 설치된 폐건전지 전용 수거함에 버려주세요." +
                  "만약 가까운 곳에 폐건전지 수거함이 없다면 박스 등 한곳에 건전지와 함께 모아두었다가 양이 많아지면 한번에 버려주세요."
                }
                content2={
                  "휴대폰이나 노트북 등을 충전할 때 쓰는 보조배터리는 대부분 리튬이온 배터리입니다." +
                  "리튬이온 배터리는 용량이 크고, 자연 방전이 적지만 충격 등 물리적 압력을 받거나 다른 물질과 접촉해 화학 반응이 일어날 경우 폭발 가능성이 존재하기 때문에 일반쓰레기로 버리면 위험할 수 있습니다." +
                  "또한 보조배터리를 일반쓰레기로 버려서 소각 또는 매립된다면 배터리 내부의 중금속이 대기, 토양, 하천으로 흘러드는 심각한 환경오염을 유발할 수 있습니다." +
                  "보조배터리를 폐건전지 전용 수거함으로 잘 분리배출하면 니켈 등의 금속을 추출하여 재활용하게 됩니다. 재활용 가치도 높고 재활용률도 매우 높은 자원이므로 반드시 폐건전지 전용수거함에 잘 분리배출해주세요."
                }
                img={`/lifetip/4.png`}
              />
              <LifeTipCard
                title={"5: 형광등이 나가서 갈았어요! 다 쓴 형광등 버리는 법?"}
                ti={"#삼파장전구 #깨진형광등"}
                recy={"불가능"}
                type={"형광등 전용 수거함"}
                num={5}
                content1={
                  "형광등은 반드시 아파트 단지내 또는 가까운 주민센터 등에 설치된 형광등 전용 수거함으로 버려주세요." +
                  "만약 형광등이 깨졌다면 불연성 쓰레기 봉투에 담아 버려주시고, 깨진 형광등이 수거하는 사람을 다치게 할 수 있으니 쓰레기 봉투가 찢어지지 않게 신문지 등으로 잘 싸서 버려주세요."
                }
                content2={
                  "형광등 내부의 수은은 인체에 매우 유해한 물질입니다. 수은이 공기 중으로 유출되지 않도록 깨지지 않게 버려주세요." +
                  "불연성 쓰레기 봉투는 지역 내 마트, 주민센터, 철물점 등에서 살 수 있어요. 하지만 안파는 곳도 많으니 판매여부를 미리 확인하고 방문하세요." +
                  "불연성 쓰레기 봉투는 해당 지자체에 따라 불연재 쓰레기 봉투, 생활 폐기물 봉투, 특수 종량제 봉투 등으로 이름이 조금씩 다를 수 있어요. 모두 타지 않는 쓰레기를 담는 종량제 봉투라는 것과 마대 재질로 만들어졌다는 것을 기억해주세요."
                }
                img={`/lifetip/5.png`}
              />
              <LifeTipCard
                title={"6: 깨진 유리는 불연성 쓰레기로 분류됩니다"}
                ti={"#깨진유리 #깨진그릇"}
                recy={"불가능"}
                type={"불연성 쓰레기"}
                num={6}
                content1={
                  "깨진 유리나 자기 그릇는 불에 타지 않는 쓰레기이기 때문에 불연성 쓰레기 봉투(마대)에 넣어서 버려주세요." +
                  "창문이나 전신 거울, 벽면 거울 등 불연성 쓰레기 봉투에 담을 수 없는 유리류는 대형 생활 폐기물로 신고 배출해주세요." +
                  "불연성 쓰레기 봉투는 지역 내 마트, 주민센터, 철물점 등에서 살 수 있어요. 하지만 안파는 곳도 많으니 판매여부를 미리 확인하고 방문하세요." +
                  "대형 생활 폐기물은 주민센터, 구청 등의 지자체에 신고 후 (웹사이트 또는 직접 방문) 폐기물 스티커를 인쇄하거나 발급받아 집 밖으로 옮겨두면 폐기물 수거 업체에서 1-2일 내에 수거해 갑니다."
                }
                content2={
                  "깨진 유리나 그릇은 수거할 때 사람을 다치게 할 수 있어요. 쓰레기 봉투가 찢어지지 않게 신문지 등으로 싸서 버려주세요." +
                  "불연성 쓰레기 봉투는 해당 지자체에 따라 불연재 쓰레기 봉투, 생활 폐기물 봉투, 특수 종량제 봉투 등으로 이름이 조금씩 다를 수 있어요. 모두 타지 않는 쓰레기를 담는 종량제 봉투라는 것과 마대 재질로 만들어졌다는 것을 기억해주세요."
                }
                img={`/lifetip/6.png`}
              />
              <mainS.Btn>
                <mainS.Number>
                  <mainS.Black onClick={() => setNum(1)}>1</mainS.Black>
                  <mainS.NonBlack onClick={() => setNum(2)}>2</mainS.NonBlack>
                  <mainS.NonBlack onClick={() => setNum(3)}>3</mainS.NonBlack>
                </mainS.Number>
              </mainS.Btn>
            </mainS.MainCon>
          )}
          {num == 2 && (
            <mainS.Btn>
              <mainS.Number>
                <mainS.NonBlack onClick={() => setNum(1)}>1</mainS.NonBlack>
                <mainS.Black onClick={() => setNum(2)}>2</mainS.Black>
                <mainS.NonBlack onClick={() => setNum(3)}>3</mainS.NonBlack>
              </mainS.Number>
            </mainS.Btn>
          )}
          {num == 3 && (
            <mainS.Btn>
              <mainS.Number>
                <mainS.NonBlack onClick={() => setNum(1)}>1</mainS.NonBlack>
                <mainS.NonBlack onClick={() => setNum(2)}>2</mainS.NonBlack>
                <mainS.Black onClick={() => setNum(3)}>3</mainS.Black>
              </mainS.Number>
            </mainS.Btn>
          )}
        </mainS.Main>
      </mainS.Wrapper>
    </mainS.Div>
  );
}
export default LifeTip;
