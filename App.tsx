import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from './src/utils/hooks';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';

import { RootState } from './src/redux/store';

function App(): React.JSX.Element {
  const { isAuthenticated } = useAppSelector((state: RootState) => state?.userData);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
