import styled from 'styled-components';

export const JoinHeading = styled.h2`
  font-size: 32px;
  color: green;
  text-align: left;
`;

export const BasicInfoHeading = styled.h3`
  font-size: 16px;
  text-align: left;
`;

export const InfoBox = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 20px;
`;

export const MoreButton = styled.button`
  background-color: #ccc;
  color: #000;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelContainer = styled.div`
  flex: 1;
`;

export const InfoLine = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto; /* Two columns, first one takes remaining space, other two are auto-sized */
  align-items: center;
  margin-bottom: 8px;
`;

export const PostTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: left; /* Left-align the content of PostTitle */
`;

export const PostEmail = styled.span`
  font-size: 14px;
  color: #555;
  justify-self: end; /* Right-align the email */
  margin-right: 10px;
`;

export const PostDate = styled.span`
  font-size: 14px;
  color: #555;
  justify-self: end; /* Right-align the date */
  margin-right: 10px;
`;
