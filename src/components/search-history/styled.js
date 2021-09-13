import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  border: 1px;
  border-color: ${({theme}) => theme.color.lightGray};
  width: ${({theme}) => theme.windowWidth * 0.75}px;
  padding: ${({theme}) => theme.spacing.small}px;
`;

export const StyledButton = styled.Text``;

export const StyledWrapper = styled.View`
  justify-content: space-between;
  margin: ${({theme}) => theme.spacing.small}px;
`;

export const StyledHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing.small}px;
`;

export const HeaderWrapper = styled.View`
  justify-content: space-between;
  margin: ${({theme}) => theme.spacing.small}px;
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 12px;
  font-weight: 200;
  /* margin-left: ${({theme}) => theme.spacing.default}px; */
`;
