import { useLocation } from "react-router-dom";
import * as tipDeS from "./Styled/LifeTipDe.main.styles";
function LifeTipDe() {
  const location = useLocation();
  console.log(location);
  const title = location.state.title;
  const content = location.state.content;
  return (
    <tipDeS.Div>
      <tipDeS.Wrapper>
        <tipDeS.Main>
          <tipDeS.Title>Life Tip</tipDeS.Title>
          <tipDeS.SubTitle>{title}</tipDeS.SubTitle>
          <tipDeS.Line style={{ marginTop: "8px" }} />
          <tipDeS.Con>{content}</tipDeS.Con>
          <tipDeS.Line />
        </tipDeS.Main>
      </tipDeS.Wrapper>
    </tipDeS.Div>
  );
}
export default LifeTipDe;
