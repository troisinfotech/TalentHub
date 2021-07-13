import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import * as eva from '@eva-design/eva';
import AppContainer from './src';

import createStore from './src/redux/createStore';



const store = createStore();


const App: FC = () => {

  return (
    <Provider key="provider" store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </ApplicationProvider>
    </Provider>

  );
};

export default App;