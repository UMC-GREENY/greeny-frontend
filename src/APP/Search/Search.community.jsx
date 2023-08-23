import { useState } from "react";
import * as SearchC from "./Styled/Search.community.styles";
import { ACCESS_TOKEN } from "../Api/request";
import { isSuccessState } from "../Login/Recoil/Recoil.auth.state";
import { useRecoilState, useRecoilValue } from "recoil";
import request from "../Api/request";
function SearchCommunity({ prop }) {
  const [content, setContent] = useState([]);
  const isSuccess = useRecoilValue(isSuccessState);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const con =
  //         isSuccess === true
  //           ? await request.get(
  //               `/api/stores/auth/simple?keyword=${prop}&page=0&size=2`,
  //               {
  //                 headers: {
  //                   Authorization: `Bearer ${window.localStorage.getItem(
  //                     ACCESS_TOKEN
  //                   )}`,
  //                 },
  //               }
  //             )
  //           : await request.get(
  //               `/api/stores/simple?keyword=${prop}&page=0&size=2`,
  //               {
  //                 headers: {
  //                   Authorization: `Bearer ${window.localStorage.getItem(
  //                     ACCESS_TOKEN
  //                   )}`,
  //                 },
  //               }
  //             );
  //       console.log(con);
  //       console.log(con.data.content);
  //       setContent(con.data.content);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [prop]);
  return (
    <SearchC.Wrapper>
      <SearchC.Div>
        <h2>Community</h2>
        <SearchC.Box type={content}>
          {/* {content.length === 0 ? (
            <SearchC.Alert>검색 결과가 없습니다.</SearchC.Alert>
          ) : (
            content.map((item, index) => (
              // <StoreCard key={index} type="new" data={item} />
            ))
          )} */}
        </SearchC.Box>
      </SearchC.Div>
    </SearchC.Wrapper>
  );
}
export default SearchCommunity;
