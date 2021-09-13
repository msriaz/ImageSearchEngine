import styled from 'styled-components/native';

export const StyledWrapper = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.small}px;
  background-color: ${({theme}) => theme.color.lightestGray};
  border-radius: ${({theme}) => theme.radius.half}px;
  margin: ${({theme}) => theme.spacing.xsmall}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledItem = styled.Text`
  font-size: 14px;
  font-weight: 200;
  margin: ${({theme}) => theme.spacing.xsmall}px;
`;
