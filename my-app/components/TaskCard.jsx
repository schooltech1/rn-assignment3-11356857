import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <TouchableOpacity style={styles.taskCard}>
      <Text style={styles.taskText}>{task}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  taskText: {
    fontSize: 16,
    color: 'black',
  },
});

export default TaskCard;
