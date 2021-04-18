import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BoxContainer, Header } from '../../components';

const Dashboard = () => {
  return (
    <BoxContainer>
      <Header style={styles.header} />
      <Text>Dashboard</Text>
    </BoxContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: { paddingHorizontal: 10, paddingTop: 15 },
});
