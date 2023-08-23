import styled from "styled-components";
import * as tokens from "../../tokens";

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SignupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 0px;
  margin-left: 240px;
  margin-right: 240px;
  width: 1270px;
  border-bottom: 1px solid black;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 48px;

  font-family: "New York";
  font-weight: normal;
  justify-content: flex-start;
  margin-top: 104px;
  ${(props) => `color:${tokens.colors.green_main2}`};
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: "New York";
  font-size: 24px;
  margin-top: 36px;
  padding-bottom: 16px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 1230px;
  height: 1px;
  margin-bottom: 10px;
  ${(props) => `background-color: ${tokens.colors.grey_80}`};
`;

export const InfoBox = styled.div`
  padding: 20px;
`;
//------------------------------------------------
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1270px;
  height: 44px;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WriteButton = styled.button`
  ${(props) => `background-color: ${tokens.colors.grey_900}`};
  ${(props) => `color: ${tokens.colors.grey_100}`};
  width: 88px;
  height: 29px;
  border: none;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 4px;
`;
//-------------------------------------------------------

export const LabelContainer = styled.div`
  flex: 1;
`;

//---------------------------------------------------------
export const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const PostTitle = styled.div`
  font-size: 16px;
  text-align: left;
  width: 1070px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostStar = styled.div`
  font-size: 16px;
  text-align: left;
  width: 250px;
  margin-right: 20px;
`;

export const PostContent = styled.div`
  font-size: 16px;
  text-align: left;
  width: 800px;
  margin-right: 20px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostEmail = styled.div`
  font-size: 14px;
  text-align: left;
  margin-right: 40px;
  width: 160px;
  ${(props) => `color: ${tokens.colors.grey_15}`};
`;

export const PostDate = styled.div`
  font-size: 14px;
  text-align: left;
  margin-left: 0px;
  width: 130px;
  ${(props) => `color: ${tokens.colors.grey_40}`};
`;
//---------------------------------------------------------------

//
export const PageSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
//--------------------------------------------------
export const InputWrapper = styled.div`
  width: 391px;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 300px;
`;
export const InputBox = styled.input`
  width: 391px;
  height: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  font-family: "Pretendard";
  ${(prop) =>
    `color:${tokens.colors.grey_60}; border-bottom:1px solid ${tokens.colors.grey_15}`}
`;
export const InputIcon = styled.div`
  width: 30px;
  height: 50px;
  background-image: url("/../../lifetip/search.png");
  background-size: 25px 25px;
  background-position: bottom;
  background-repeat: no-repeat;
`;
//--------------------------------------------------------------------


//------------------------------------------------

export const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 26px;
    height: 26px;
    border-radius: 99%;
    font-size: 12px;
    line-height: 18px;
    border: none;
  }
  margin: 15px 0 0px 600px;
  ul.pagination li.active a {
    color: ${tokens.colors.grey_100};
  }
  ul.pagination li.active {
    background-color: ${tokens.colors.green_deep};
  }
  ul.pagination li a {
    text-decoration-line: none;
    color: ${tokens.colors.grey_60};
  }
`;

export const keyword = styled.p`
  margin-top: 40px;
  font-weight: 700;
  font-size: 24px;
`;
