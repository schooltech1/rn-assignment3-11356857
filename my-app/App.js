import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5EE',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  }
});

export default App;

