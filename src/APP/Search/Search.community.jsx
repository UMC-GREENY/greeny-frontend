import { useEffect, useState } from "react";
import * as SearchC from "./Styled/Search.community.styles";
import { ACCESS_TOKEN } from "../Api/request";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import request from "../Api/request";
import SearchComment from "./Search.comment";
function SearchCommunity({ prop }) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const con = await request.get(
          `/api/posts/search?keyword=${prop}&page=0&size=2`
        );

        console.log(con);
        console.log(con.data.content, "comu");
        setContent(con.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [prop]);
  return (
    <SearchC.Wrapper>
      <SearchC.Div>
        <h2>Community</h2>
        <SearchC.Box type={content}>
          {content.length === 0 ? (
            <SearchC.Alert>검색 결과가 없습니다.</SearchC.Alert>
          ) : (
            content.map((item, index) => (
              <SearchComment key={index} data={item} />
            ))
          )}
        </SearchC.Box>
      </SearchC.Div>
    </SearchC.Wrapper>
  );
}
export default SearchCommunity;
