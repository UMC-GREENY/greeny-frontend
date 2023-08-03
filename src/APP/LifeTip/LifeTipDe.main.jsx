import { Link, useLocation } from "react-router-dom";
import * as tipDeS from "./Styled/LifeTipDe.main.styles";
function LifeTipDe() {
  const location = useLocation();
  console.log(location);
  const title = location.state.title;
  const content = location.state.content;
  const img = location.state.img;
  return (
    <tipDeS.Div>
      <tipDeS.Wrapper>
        <tipDeS.Main>
          <tipDeS.Title>Life Tip</tipDeS.Title>
          <tipDeS.SubTitle>{title}</tipDeS.SubTitle>
          <tipDeS.Line style={{ marginTop: "8px" }} />
          <tipDeS.Con>
            {`${content}` === "2" ? (
              <tipDeS.ConDe>
                <tipDeS.Ti>
                  <img src={img} />
                  <tipDeS.Col>
                    <h2>#양산</h2>
                    <h4>재활용: 불가능</h4>
                    <h4>
                      분류:{" "}
                      <Link
                        to="https://blisgo.com/category/%ec%9d%bc%eb%b0%98%ec%93%b0%eb%a0%88%ea%b8%b0/"
                        target="_blank"
                      >
                        재활용 쓰레기
                      </Link>
                    </h4>
                  </tipDeS.Col>
                </tipDeS.Ti>
                <tipDeS.Text>
                  <h2>버리는 방법</h2>
                  <h4>
                    - 우산은 플라스틱, 알루미늄, 합성섬유 등 여러 재질이
                    섞여있어 재활용이 불가능하니 통째로 일반쓰레기(종량제봉투)로
                    버려주세요.
                    <br />
                    - 가위나 칼을 이용해 우산 천(또는 비닐)과 우산대(우산살)를
                    분리하면 재질에 따라 분리배출이 가능할 수도 있지만 우산대에
                    알루미늄과 함께 유리섬유(파이버글래스)를 사용하는 경우가
                    많아 분리과정에서 유리섬유가 손에 박히거나 하는 위험성이
                    있습니다. (Seung6109님 제보)
                    <br />- 크기가 커서 종량제봉투에 담을 수 없는 우산은
                    주민센터, 시/군/구청을 통해 대형생활폐기물로
                    신고/배출해주세요.
                  </h4>
                </tipDeS.Text>
                <tipDeS.Text>
                  <h2>알아두면 좋은 점</h2>
                  <h4>
                    - 자동 우산은 우산대가 펴져서 종량제봉투를 찢고 나올
                    가능성이 있으니 우산대를 끈으로 묶어서 고정시킨 후
                    배출해주세요.
                    <br /> - 일반쓰레기로 버려진 소형 철제류는 폐기장에서 1차
                    소각 후 타지 않고 남은 고철류를 자력선별기(대형자석)로 한번
                    더 수거하는 과정을 거친다고 합니다.
                    <br /> - 대형생활폐기물 신고 및 수거는 유료이며, 크기와
                    무게에 따라 1,000원-10,000원 가량이 부과됩니다.
                    <br /> - 대형생활폐기물은 주민센터, 구청 등의 지자체에 신고
                    후 (웹사이트 또는 직접 방문) 폐기물 스티커를 인쇄하거나
                    발급받아 집 밖으로 옮겨두면 폐기물 수거 업체에서 1-2일 내에
                    수거해 갑니다.
                    <br /> - 스티커를 발급받지 않고 길거리, 야산, 쓰레기 수거
                    장소에 몰래 버릴 경우 수거가 되지 않을 뿐만 아니라 무단
                    투기로 간주되어 폐기물관리법에 의거해 100만원 이하의
                    과태료가 부과됩니다.
                  </h4>
                </tipDeS.Text>
              </tipDeS.ConDe>
            ) : (
              `${content}`
            )}
          </tipDeS.Con>
          <tipDeS.Line />
        </tipDeS.Main>
      </tipDeS.Wrapper>
    </tipDeS.Div>
  );
}
export default LifeTipDe;
