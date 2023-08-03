import LifeTipCard from "./LifeTip.main.card";
import LifeTipMainTitle from "./LifeTip.main.title";
import * as mainS from "./Styled/LifeTip.main.styles";

function LifeTip() {
  return (
    <mainS.Div>
      <mainS.Wrapper>
        <LifeTipMainTitle />
        <mainS.Main>
          <mainS.MainCon>
            <LifeTipCard
              title={"1: 생수병 제대로 분리배출 하는 법, 알고 계신가요?"}
              content={"상세내용"}
              img={`/lifetip/1.png`}
            ></LifeTipCard>
            <LifeTipCard
              title={"2: 여름 장마철! 망가진 우산은 어떻게 버릴까요?"}
              content={2}
              img={`/lifetip/2.png`}
            ></LifeTipCard>
            <LifeTipCard
              title={"3: 매트리스 버리는 법을 알아봅시다"}
              content={"상세내용"}
              img={`/lifetip/3.png`}
            ></LifeTipCard>
            <LifeTipCard
              title={
                "4: 친환경 라이프 스타일 구성하기! 작은 습관부터 시작해봐요"
              }
              content={"상세내용"}
              img={`/lifetip/4.png`}
            ></LifeTipCard>
            <LifeTipCard
              title={"5: 고장 난 보조 배터리는 어디에 버릴까요?"}
              content={"상세내용"}
              img={`/lifetip/5.png`}
            ></LifeTipCard>
            <LifeTipCard
              title={"6: 형광등이 나가서 갈았어요! 다 쓴 형광등 버리는 법"}
              content={"상세내용"}
              img={`/lifetip/6.png`}
            ></LifeTipCard>
          </mainS.MainCon>
        </mainS.Main>
      </mainS.Wrapper>
    </mainS.Div>
  );
}
export default LifeTip;
