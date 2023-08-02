import { Container, Title, Slogan } from './styles';
import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env';
import { useEffect, useState } from 'react';

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    // iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  });

  function handleGoogleSignIn(){
    
    setIsAuthenticating(true);

    googleSignIn().then((response) => {
      if(response.type !== 'success') {
        
        setIsAuthenticating(false);
      }
    })    
  }

  useEffect(() => {
    if(response?.type === 'success') {
      console.log('TA CHEGANDO AQUI 12');
      if(response.authentication?.idToken) {       
        console.log('TOKEN DE AUTENTICACAO: =>', response.authentication.idToken);
      //   const credentials = Realm.Credentials.jwt(response.authentication.idToken);

      //   app.logIn(credentials).catch((error) => {
      //     console.log(error);
      //     Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.')
      //     setIsAuthenticating(false);
      //   })
      // } else {
      //   Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.')
      //   setIsAuthenticating(false);
      }
    }
  },[response])




  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button 
        title='Entrar com Google' 
        onPress={handleGoogleSignIn} 
        isLoading={isAuthenticating} 
      />
    </Container>
  );
}
