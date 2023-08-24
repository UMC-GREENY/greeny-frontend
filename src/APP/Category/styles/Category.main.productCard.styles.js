import styled from 'styled-components';
import * as tokens from '../../tokens';

export const cardWrap = styled.div`
  width: ${(props) => (props.type === 'best' ? '292px' : '330px;')};
  height: ${(props) => (props.type === 'best' ? '498px' : '548px')};
  border-radius: 6px;
  border: 1px solid ${tokens.colors.grey_90};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${(props) => (props.type === 'best' ? '40px' : '')};
`;
export const ImageWrap = styled.div`
  position: relative;
`;
export const likebuttonWrap = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export const img = styled.img`
  width: ${(props) => (props.type === 'best' ? '292px' : '330px;')};
  height: ${(props) => (props.type === 'best' ? '390px' : '440px')};
  border-radius: 5px 5px 0px 0px;
`;

export const descripWrap = styled.div`
  width: 292px;
  height: 104px;
  padding: 0px 0px 12px 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const text = styled.span`
  font-family: Pretendard;

  width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-weight: 400;
  text-align: center;
  margin-top: 4px;
  ${(props) =>
    props.type === 'brand'
      ? `
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0em;
`
      : props.type === 'location'
      ? `
      width: 60px;
      padding: 0px 16px 0px 16px;
      border-radius: 5px;
      border: 1px solid ${tokens.colors.grey_60};
`
      : props.type === 'category'
      ? `
      background-color: ${tokens.colors.green_tag};
      width: 88px;
      padding: 1px 16px 1px 16px;
      border-radius: 5px;
      gap: 10px;
      `
      : ` 
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0em;
            `}
`;

export const tagWrap = styled.div`
  width: 330px;
  height: 24px;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;
