/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform } from 'react-native';

import AppNavigator from 'navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        style={{ flex: 1 }}>
        <AppNavigator />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  )
}

export default App;
