import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/splashScreen';
import MyTabs from './src/navigation/navigation';

;

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);

  if (isSplashVisible) {
    return (
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
     <MyTabs/>
    </NavigationContainer>
  );
};

export default App;
