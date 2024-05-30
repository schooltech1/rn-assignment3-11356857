import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import TaskCard from './components/TaskCard';

const categories = [
  { title: 'Exercise', taskCount: 1, image: require('./assets/exercise.jpg') },
  { title: 'Study', taskCount: 2, image: require('./assets/study.jpg') },
  { title: 'Code', taskCount: 3, image: require('./assets/coding.jpg') },
  { title: 'Cook', taskCount: 4, image: require('./assets/cook.jpg') },
  { title: 'Read', taskCount: 5, image: require('./assets/read.avif') },
  { title: 'Travel', taskCount: 6, image: require('./assets/travelling.jpg') },
  { title: 'Music', taskCount: 7, image: require('./assets/music.jpg') },
  { title: 'Meditate', taskCount: 8, image: require('./assets/meditate.webp') },
];

const tasks = [
  'Mobile App Development', 'Web Development', 'Push Ups', 'Reading a Book', 'Cooking Dinner',
  'Learning React Native', 'Writing a Blog Post', 'Listening to Music', 'Jogging', 'Meditating',
  'Cleaning the House', 'Watching a Tutorial', 'Practicing Yoga', 'Planning a Trip', 'Playing Guitar'
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              title={category.title}
              taskCount={category.taskCount}
            />
          ))}
        </View>
      </ScrollView>

      {/* Ongoing Tasks Section */}
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
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
  },
  horizontalScroll: {
    marginVertical: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default App;
