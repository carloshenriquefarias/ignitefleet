import { SignIn } from './src/screens/SignIn';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import { ANDROID_CLIENT_ID } from '@env';

import theme from './src/theme';


export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  if(!fontsLoaded) {
    return ( 
      <Loading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <SignIn/>
    </ThemeProvider>
  );
}
