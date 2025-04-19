import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'

import { Routes } from 'src/routes'

import Loading from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <GestureHandlerRootView>
        {fontsLoaded ? <Routes /> : <Loading />}
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}