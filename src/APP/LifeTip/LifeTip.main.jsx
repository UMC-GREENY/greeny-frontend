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
            <LifeTipCard title={"제목"} content={"상세내용"}></LifeTipCard>
            <LifeTipCard title={"제목"} content={"상세내용"}></LifeTipCard>
            <LifeTipCard title={"제목"} content={"상세내용"}></LifeTipCard>
            <LifeTipCard title={"제목"} content={"상세내용"}></LifeTipCard>
            <LifeTipCard title={"제목"} content={"상세내용"}></LifeTipCard>
            <LifeTipCard title={"제목"} content={"상세내용"}></LifeTipCard>
          </mainS.MainCon>
        </mainS.Main>
      </mainS.Wrapper>
    </mainS.Div>
  );
}
export default LifeTip;
