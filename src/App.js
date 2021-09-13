import React from 'react';
import {StatusBar, useWindowDimensions, View} from 'react-native';
import * as theme from './theme';
import {ThemeProvider} from 'styled-components';
import {APP_COLORS} from './utils/constants';
import {Home} from './screens/home';

const App = () => {
  // return <View style={{height: 50, width:'100%', backgroundColor:'red'}}/>
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <ThemeProvider theme={{...theme, windowWidth, windowHeight}}>
      <StatusBar barStyle="dark-content" backgroundColor={APP_COLORS.WHITE} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
