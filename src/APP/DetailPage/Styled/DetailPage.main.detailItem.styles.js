import styled from "styled-components";
import * as tokens from "../../tokens";

export const ItemWrapper = styled.div`
    position: relative;
    width: 75vw;
    margin-left: 12.5vw;

    display: flex;
    justify-content: center;
    align-items: center ;
    
    background-color: red;
`;

export const InItemWrapper = styled.div`
    position: absolute;
    width: 1272px;
`

export const ImageItem = styled.div`
    position: absolute;
    top: 104px;
    width: 625px;
    height: 468px;
    background-color: yellow;
    border-radius: 5px;
`;

export const TitleItemWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${(props) => 
        props.type === "top"
            ? `
                align-items: start;
                top: 150px;
               left: 685px;
               width: 585px;`
            : props.type === "middle"
            ? ` 
                align-items: start;
                top: 357px;
                left: 685px;
                width: 587px;
                height: 80px;;
            `
            :`
                align-items: end;
                top: 471px;
                left: 1055px;
                width: 225px;
                height: 100px;
            `
    }
    
`
export const overline = styled.span`
    height: 1px;
    background-color: ${tokens.colors.grey_60};
    margin-top: 4px;
    ${(props) => 
        props.type === "name"
            ? `width: 585px`
            : `width: 245px;`
    }`

export const titleText = styled.span`
${(props) =>
      props.type === "brand"
         ? `height: 30px;
                font-size: 20px;    
                line-height: 30px;
                font-weight: bold;
                color: ${tokens.colors.grey_50};`
         : props.type === "name"
            ? `
                color: ${tokens.colors.grey_15};
                font-weight: bold;
                font-size: 32px;
                line-height: 60px;
                letter-spacing: -2px;`
            : props.type === "price"
            ? `height: 30px;
                color: ${tokens.colors.grey_15};
                font-size: 20px;
                line-height: 30px;`
            : props.type === "totalPrice"
            ? ` color: ${tokens.colors.grey_15};
                font-size: 24px;
                line-height: 36px;`
            : props.type === "address" 
            ? `
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            color: ${tokens.colors.grey_15}
            margin-top: 4px;
            `
            :props.type === "area"
            ? `
            width: 86px;
            height: 24px;
            padding: 0px 16px 0px 16px;
            border-radius: 5px;
            border: 1px solid ${tokens.colors.grey_60};
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;
            `
            :props.type === "description"
            ? `
            width: 587px;
            height: 90px;
            margin-top: 8px;
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
            font-family: Pretendard;
            text-align: left;
            `
        :`height: 30px;
            color: ${tokens.colors.grey_40};
            font-size: 20px;
            line-height: 30px;`}
` 

export const LinkTitleWrapper = styled.div`
    width: 585px;
    color: ${tokens.colors.grey_60};

    display: flex;
    justify-content: space-between;
`

export const LinkTitle = styled.span`
    height: 27px;
    font-size: 20px;
    line-height: 24px;
    margin-top: 8px;
`

export const totalWrapper = styled.div`
    width: 182px;
    height: 36px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const wishBtn = styled.button`
    width: 224px;
    height: 44px;
    background-color: ${tokens.colors.green_main2};
    color:${tokens.colors.grey_100};
    border: none;
    font-size: 24px;
    line-height: 36px;
    border-radius: 6px;
`