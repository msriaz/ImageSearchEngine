import {SafeAreaView, Platform, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const StyledWrapper = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.select({
    android: StatusBar.currentHeight,
    ios: 0,
  })}px;
`;

export const StyledText = styled.Text`
  font-size: 12px;
  font-weight: 200;
  /* margin-left: ${({theme}) => theme.spacing.default}px; */
`;

export const ResultsWrapper = styled.View`
  /* flex:1;  */
  flex-direction: row;
  justify-content: space-between;
  margin: ${({theme}) => theme.spacing.default}px;
`;
