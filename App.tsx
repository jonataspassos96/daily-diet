import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import theme from './src/theme'

import { Home } from '@screens/Home'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <GestureHandlerRootView>
        <Home />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}