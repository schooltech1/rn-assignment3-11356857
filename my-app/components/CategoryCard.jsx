

import React from 'react';
import {  Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryCard = ({ image, title, taskCount }) => {
  return (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categoryTasks}>{taskCount} Tasks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 300,  
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 60,  
    borderRadius:50,
  },
  categoryImage: {
    width: 250,
    height: 200,
    marginBottom: 10,
    
    
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: '#888',
  },
});

export default CategoryCard;
