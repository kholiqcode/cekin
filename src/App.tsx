import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PRIMARY} from './configs';
import {store} from './libs';
import Router from './routes';

const App: React.FC<{title: string}> = ({children, title}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <StatusBar
          showHideTransition="slide"
          barStyle="light-content"
          backgroundColor={PRIMARY}
        />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
