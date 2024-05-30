// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/Ellipse 1.png')} style={styles.backgroundImage} />
        <Image source={require('../assets/person.png')} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 14,
    color: 'gray',
  },
  profileContainer: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  backgroundImage: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: 5,
    left: 5,
  },
});

export default Header;
