import * as titleS from "./Styled/LifeTip.main.title.styles";
function LifeTipMainTitle() {
  return (
    <titleS.Div>
      <titleS.Wrapper>
        <titleS.Title>Life Tip</titleS.Title>
        <titleS.Div2>
          <titleS.SubTitle>Greeny Life Tip</titleS.SubTitle>
          <titleS.TopNavInputWrapper>
            <titleS.TopNavInputBox placeholder="게시글 검색하기"></titleS.TopNavInputBox>
            <titleS.TopNavInputIcon></titleS.TopNavInputIcon>
          </titleS.TopNavInputWrapper>
        </titleS.Div2>
        <titleS.Div3>
          greeny는 더 많은 사람이 친환경 라이프 스타일을 구축할 수 있도록
          일상생활에서 실천할 수 있는 환경을 위한 tip을 제공합니다.
        </titleS.Div3>
      </titleS.Wrapper>
    </titleS.Div>
  );
}
export default LifeTipMainTitle;
