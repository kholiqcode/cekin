import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: React.FC<{title: string}> = ({children, title}) => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
