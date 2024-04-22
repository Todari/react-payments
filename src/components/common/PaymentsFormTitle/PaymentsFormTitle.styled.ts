import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: black;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 9.5px;
  line-height: 14px;
  color: #8b95a1;
`;

export { TitleContainer, Title, SubTitle };
