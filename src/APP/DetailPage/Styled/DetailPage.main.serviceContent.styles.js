import styled from "styled-components";
import * as tokens from "../../tokens";

export const ContentWrap = styled.div`
font-family: "Pretendard";
  position: relative;
  top: 757px;
  width: 75vw;
  margin-left: 12.5vw;
  padding-bottom: 13.0208vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailInfo = styled.img`
  width: 1269px;
  height: auto;
`;

export const InquiryWrapper = styled.div`
  ${(props) =>
    props.type === "contact"
      ? `
                height: 92px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;`
      : props.type === "total"
      ? ` height: 168px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 40px;
        `
      : `
            height: 44px;`}
`;
export const ContentText = styled.span`
  color: ${tokens.colors.grey_15};
  ${(props) =>
    props.type === "headLine"
      ? `
                font-size: 24px;    
                line-height: 36px;`
      : props.type === "content"
      ? `
                font-size: 20px;
                line-height: 30px;
            `
      : props.type === "sub"
      ? `
                font-size: 16px;
                line-height: 24px;
            `
      : props.type === "body1"
      ? `
                font-size: 14px;
                line-height: 21px;
            `
      : `
            font-size: 20px;
            line-height: 24px;`}
`;

export const ReviewWrapper = styled.div`
  height: 36px;
  ${(props) =>
    props.type === "top"
      ? `
                width: 1230px;
                display: flex;
                justify-content: space-between;
            `
      : props.type === "body"
      ? `
                width: 1231px;
                height: 100%;
                padding-top: 40px;
                padding-bottom: 40px;
                
            `
      : props.type === "content"
      ? `
                width: 1231px;
                height: 42px;
                border-bottom: 1px solid ${tokens.colors.grey_80};
                display: flex;
                align-items: center;
                
            `
      : props.type === "btn"
      ? ` width: 146px;
                height: 28px;
                margin-top: 40px;
                display: flex;
                justify-content: space-around;
            `
      : props.type === "btns"
      ? `
                width: 488px;
                height: 44px;
                border-radius: 6px;
                margin-top: 316px;
                display: flex;
                justify-content: space-between;
            `
      : props.type === "write"
      ? `
                width: 1231px;
                height: 550px;
            `
      : props.type === "title"
      ? `
                width: 1231px;
                height: 50px;
                border-bottom: 1px solid ${tokens.colors.grey_80};
                display: flex;
                align-items: center;
            `
      : props.type === "img"
      ? `
            width: 566px;
            height: 424px;
            border-radius: 5px;
            overflow: hidden;
            `
      : props.type === "viewContent"
      ? `
            width: 566px;
            height: 424px;
            border-radius: 5px;
            `
      : props.type === "starbox"
      ? `
            z-index: 1000;
            margin-left: 55px;
            margin-right: 10px;
            height: 19px;
            overflow: hidden;
            `
      : props.type === "bottom"
      ? `
                width: 1231px;
                display: flex;
            `
            : props.type === "text"
      ? `
                display:flex;
                justify-content: space-between;
            `
      : props.type === "writeContent"
      ? `
                width: 1212px;
                display: flex;
                flexDirection: column;
                alignItems: start;
                margin-bottom: 36px;
            `
      : ` 
            `}
`;
export const FileInput = styled.input`
  color: ${tokens.colors.grey_15};
  font-size: 14px;
  line-height: 21px;
  width: 824px;
  border-radius: 5px;
  border: 1px solid #b3b3b3;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Btn = styled.button`
  background-color: ${tokens.colors.green_deep};
  color: ${tokens.colors.grey_100};
  ${(props) =>
    props.type === "write"
      ? `width: 86px;
                    height: 29px;
                    border-radius: 4px;
                    font-size: 16px;
                    line-height: 21px;`
      : props.type === "list"
      ? `
                    height: 29px;
                    margin-top: 20px;
                    padding: 4px 20px 4px 20px;
                    border-radius: 4px;
                    border: 1px solid ${tokens.colors.grey_80};
                    color: ${tokens.colors.grey_60};
                    background-color: white;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 21px;
                `
      : props.type === "attach"
      ? `
                    width: 127px;
                    height: 36px;
                    border-radius: 4px;
                    margin-left: 20px;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 21px;
                `
      : props.type === "cancelSubmit"
      ? `
                    width: 224px;
                    height: 44px;
                    border-radius: 6px;
                    color: ${tokens.colors.grey_100};
                    border: none;
                    font-size: 24px;
                    line-height: 36px;
                `
      : `width: 26px;
                   height: 26px;
                   border-radius: 99%;
                   font-size: 12px;
                   line-height: 18px;
                   border: none;`}
`;

export const overline = styled.span`
  height: 1px;
  background-color: ${tokens.colors.grey_15};
  width: 1231px;
`;
export const textarea = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  width: 1030px;
  height: 326px;
  border-radius: 5px;
  border: 1px solid ${tokens.colors.grey_70};
  resize: none;
  padding: 10px;
`;

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
  ul.pagination li.active a {
    color: ${tokens.colors.grey_100};
  }
  ul.pagination li.active {
    background-color: ${tokens.colors.green_deep};
  }
  ul.pagination li a {
    text-decoration-line: none;
    color: ${tokens.colors.grey_60};
    background-image: url("/review/deleteIcon");
  }
`;

export const imgIcon = styled.img`
${(props) => 
        props.type === "delete"
            ? `width: 44px;
            );
             `
            : `width: 24px;
            margin-left:4px;`
    }`
// `

//  ${(props) => 
//         props.type === "name"
//             ? `width: 585px`
//             : `width: 245px;`
//     }` */
