# rn-assignment3-11356857
# Task Manager App

A React Native application to manage and track your daily tasks, featuring categories, ongoing tasks, and a user-friendly interface.

## Components

### Header
- **File**: `./components/Header.js`
- **Usage**: Displays a greeting message, the number of tasks for the day, and a profile image.
- **Props**: None
- **Description**: The Header component includes a greeting message ("Hello, Devs"), the task count ("14 tasks today"), and two images for the profile section. The first image acts as a background, and the second image overlays it.

### SearchBar
- **File**: `./components/SearchBar.js`
- **Usage**: Provides a search input field and a filter button.
- **Props**: None
- **Description**: The SearchBar component contains a search input field with a placeholder text "Search" and a filter button represented by an emoji icon. It allows users to search through tasks and filter the results.

### CategoryCard
- **File**: `./components/CategoryCard.js`
- **Usage**: Displays a category card with an image, title, and task count.
- **Props**:
  - `image` (required): The source of the category image.
  - `title` (required): The title of the category.
  - `taskCount` (required): The number of tasks in the category.
- **Description**: The CategoryCard component is used to display different categories of tasks, such as Exercise, Study, Code, etc. Each card shows an image, the category title, and the number of tasks in that category.

### TaskCard
- **File**: `./components/TaskCard.js`
- **Usage**: Displays a card with the task name.
- **Props**:
  - `task` (required): The name of the task.
- **Description**: The TaskCard component is used to display individual tasks in a list. Each card shows the name of the task.

### App
- **File**: `./App.js`
- **Usage**: The main component that renders the entire application, including the header, search bar, categories, and ongoing tasks.
- **Props**: None
- **Description**: The App component orchestrates the entire application. It imports and uses the Header, SearchBar, CategoryCard, and TaskCard components to build the user interface. It defines the categories and tasks data and passes it to the respective components.

## Running the App

To run the app, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone <repository_url>
## Screenshots
![Screenshot (9)](https://github.com/schooltech1/rn-assignment3-11356857/assets/170237696/9b33cdb5-11ed-43b5-afaa-7762170bf40a)


![Screenshot (10)](https://github.com/schooltech1/rn-assignment3-11356857/assets/170237696/68eae65a-ef65-4734-a930-5cf62cfca216)
