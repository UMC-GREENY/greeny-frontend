import * as SearchP from "./Styled/Search.product.styles";
function SearchProduct() {
  return (
    <SearchP.Wrapper>
      <SearchP.Div>
        <h2>Product</h2>
        <SearchP.Box type={"d"}>
          <SearchP.Btns>
            <SearchP.Btn>인기순</SearchP.Btn>|<SearchP.Btn>후기순</SearchP.Btn>|
            <SearchP.Btn>가격 높은 순</SearchP.Btn>|
            <SearchP.Btn>가격 낮은 순</SearchP.Btn>
          </SearchP.Btns>
        </SearchP.Box>
      </SearchP.Div>
    </SearchP.Wrapper>
  );
}
export default SearchProduct;
