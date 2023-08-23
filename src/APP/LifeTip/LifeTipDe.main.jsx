import { Link, useLocation } from "react-router-dom";
import * as tipDeS from "./Styled/LifeTipDe.main.styles";
function LifeTipDe() {
  const location = useLocation();
  const title = location.state.title;
  const ti = location.state.ti;
  const recy = location.state.recy;
  const type = location.state.type;
  const num = location.state.num;
  const content1 = location.state.content1;
  const content2 = location.state.content2;
  const img = location.state.img;
  return (
    <tipDeS.Div>
      <tipDeS.Wrapper>
        <tipDeS.Main>
          <tipDeS.Title>Life Tip</tipDeS.Title>
          <tipDeS.SubTitle>{title}</tipDeS.SubTitle>
          <tipDeS.Line style={{ marginTop: "8px" }} />
          <tipDeS.Con>
            <tipDeS.ConDe>
              <tipDeS.ImgTi src={img}>
                <h4>Tip {num}.</h4>
                <h2>{title}</h2>
                <tipDeS.SubTi>
                  <div style={{ fontSize: "20px" }}>{ti}</div>
                  <div style={{ fontSize: "16px" }}>
                    재활용: {recy}
                    <br />
                    분류: {type}
                  </div>
                </tipDeS.SubTi>
              </tipDeS.ImgTi>
              <tipDeS.Text>
                <tipDeS.H2>
                  <tipDeS.Line2 />
                  <h2>버리는 방법</h2>
                </tipDeS.H2>
                <h4>{content1}</h4>
              </tipDeS.Text>
              <tipDeS.Text>
                <tipDeS.H2>
                  <tipDeS.Line2 />
                  <h2>알아두면 좋은 점</h2>
                </tipDeS.H2>
                <h4>{content2}</h4>
              </tipDeS.Text>
              <div style={{ paddingBottom: "120px" }}></div>
            </tipDeS.ConDe>
          </tipDeS.Con>
          <tipDeS.Line />
        </tipDeS.Main>
      </tipDeS.Wrapper>
    </tipDeS.Div>
  );
}
export default LifeTipDe;
