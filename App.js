import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import BootSplash from "react-native-bootsplash";
import NonAuthenticated from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/user';

const App = () => {

  const appState = useRef(AppState.currentState)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        // We are coming from the background to the foreground
        console.log('Tou have come back into the app')
        await checkToken()

      }
      appState.current = nextAppState
    })
    checkToken()

  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer
        onReady={() => {
          BootSplash.hide();
        }}
        >
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
