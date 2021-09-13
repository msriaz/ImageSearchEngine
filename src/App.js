import React from 'react';
import {StatusBar, useWindowDimensions} from 'react-native';
import * as theme from './theme';
import {ThemeProvider} from 'styled-components';
import {APP_COLORS} from './utils/constants';
import {Home} from './screens/home';

const App = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <ThemeProvider theme={{...theme, windowWidth, windowHeight}}>
      <StatusBar barStyle="dark-content" backgroundColor={APP_COLORS.WHITE} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
