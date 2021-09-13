import {Button} from 'react-native';
import styled from 'styled-components/native';
import {Spinner} from '../spinner';

export const StyledTextInput = styled.TextInput`
  border: 1px;
  border-color: ${({theme}) => theme.color.lightGray};
  width: ${({theme}) => theme.windowWidth * 0.75}px;
  padding: ${({theme}) => theme.spacing.small}px;
`;

export const StyledButton = styled(Button)``;

export const StyledWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${({theme}) => theme.spacing.small}px;
`;

export const StyledSpinner = styled(Spinner)`
justify-content: center;
align-self: center;

`;
export const SpinnerWrapper = styled.View`
 justify-content: center;
align-self: center;
align-items: center;
background-color: aliceblue;
`;