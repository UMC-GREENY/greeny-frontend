import Pagination from "react-js-pagination";
import * as SearchP from "./Styled/Search.product.styles";
import SearchProductCard from "./Search.productCard";
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
          <SearchP.ItemsWrapper>
            {/* {newItem.map((item, index) => (
              <SearchProductCard key={index} data={item} />
            ))} */}
            <SearchProductCard prop={""} />
          </SearchP.ItemsWrapper>
          {/* <Pagination /> */}
        </SearchP.Box>
      </SearchP.Div>
    </SearchP.Wrapper>
  );
}
export default SearchProduct;
