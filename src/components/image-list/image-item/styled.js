import {Spinner} from '../../spinner';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Image = styled(FastImage)`
  width: 45%;
  height: ${({theme}) => theme.windowWidth * 0.45}px;
  resize-mode: cover;
  margin: ${({theme}) => theme.spacing.small}px;
`;

export const Loader = styled(Spinner)`
  left: 50%;
  margin-left: -${({theme}) => theme.spacing.small}px;
  margin-top: -${({theme}) => theme.spacing.small}px;
  position: absolute;
  top: 50%;
  z-index: 2;
  margin: ${({theme}) => theme.spacing.small}px;
`;

export const Wrapper = styled.View`
  height: ${({theme}) => theme.windowWidth * 0.45}px;
  position: absolute;
  width: 45%;
`;

export const PreviewImage = styled.View`
  align-items: center;
  background-color: ${({theme}) => theme.color.lightestGray};
  height: ${({theme}) => theme.windowWidth * 0.45}px;
  justify-content: center;
  position: absolute;
  width: 45%;
  margin: ${({theme}) => theme.spacing.small}px;
`;
