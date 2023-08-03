import styled from "styled-components";
import * as tokens from "../../tokens";

export const ContentWrap = styled.div`
    position: relative;
    top: 797px;
    width: 75vw;
    margin-left: 12.5vw;
    padding-bottom:13.0208vw;;

    display: flex;
    justify-content: center;
    align-items: center ;
    flex-direction: column;
`

export const DetailInfo = styled.div`
    width: 1269px;
    height: 1000px;
    background-color: red;
`

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
        `
        : `
            height: 44px;`}        
`
export const ContentText = styled.span`
    color: ${tokens.colors.grey_15};
    ${(props) =>
		props.type === "headLine"
			? `
                font-size: 24px;    
                line-height: 36px;`
            :props.type === "content"
            ? `
                font-size: 20px;
                line-height: 30px;
            `
            :props.type === "sub"
            ? `
                font-size: 16px;
                line-height: 24px;

            `
        : `
            font-size: 20px;
            line-height: 24px;`}

`

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
                height: 246px;
            `
            :props.type === "content"
            ? `
                width: 1231px;
                height: 42px;
                border-bottom: 1px solid ${tokens.colors.grey_80};
                display: flex;
                align-items: center;
                
            `
            :props.type === "btn"
            ? ` width: 146px;
                height: 28px;
                margin-top: 40px;
                display: flex;
                justify-content: space-around;
            `
            : ` width: 96px;
            `
    }
    
`

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
                : `width: 26px;
                   height: 26px;
                   border-radius: 99%;
                   font-size: 12px;
                   line-height: 18px;
                   border: none;`
        }`

export const overline = styled.span`
    height: 1px;
    background-color: ${tokens.colors.grey_15};
    width: 1231px;
`

    /* ${(props) => 
        props.type === "name"
            ? `width: 585px`
            : `width: 245px;`
    }` */
    