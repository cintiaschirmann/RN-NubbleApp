/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="headingLarge">
            CoffStack
          </Text>

          <EyeOffIcon />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
