import styled from "styled-components";
import * as tokens from "../../tokens";

export const serviceListWrapper = styled.div`
    position: relative;
    top: 692px;
    width: 75vw;
    margin-left: 12.5vw;

    display: flex;
    justify-content: center;
    align-items: center ;
`;

export const ListWrapper = styled.div`
    position: absolute;
    width: 1272px;
    height: 56px;
    
    display: flex;
`

export const serviceItem = styled.div`
    width: 424px;
    font-size: 24px;
    line-height: 36px;
    color: ${tokens.colors.grey_15};
`