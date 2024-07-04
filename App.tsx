/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text bold preset="headingLarge">
          CoffStack
        </Text>

        <Button title="Primary" marginBottom="s12" />
        <Button disable title="Primary" marginBottom="s12" />
        <Button preset="outline" title="Outline" marginBottom="s12" />

        <Button disabled preset="outline" title="loading" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
