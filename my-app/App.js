import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5EE',
    padding: 20,
  },
});

export default App;

