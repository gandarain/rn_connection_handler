import React from 'react';
import Navigator from './src/navigator';
import {Provider as StoreProvider} from 'react-redux';
import providerStore from './src/redux/store';

export default function App() {
  return (
    <StoreProvider store={providerStore}>
      <Navigator />
    </StoreProvider>
  );
}
