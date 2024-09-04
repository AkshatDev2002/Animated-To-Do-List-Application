# Animated-To-Do-List-Application

This is a simple yet functional Todo List application built with React. The app allows users to add, edit, and delete tasks, with a user-friendly interface and responsive design.

## Project Demo
https://github.com/user-attachments/assets/749da219-b4fc-4cee-8105-ff5c6778feb0

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above) or [yarn](https://yarnpkg.com/) (v1.22 or above)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AkshatDev2002/todo-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:
```bash
npm start 
```

This will launch the application in your default web browser at http://localhost:3000.

The page will automatically reload if you make any edits to the code.

### Project Structure
The project follows a simple and clean architecture:

1. src/: Contains all the source code
2. components/: Reusable UI components
3. Todo.jsx: Main component that handles the todo list logic
4. App.jsx: Root component that brings everything together
5. index.js: Entry point for the React app
6. Todo.css: CSS file for styling the Todo component

### Key Features and React Concepts

1. Functional Components: The app is built using React functional components, which are simpler and more concise than class components.
2. React Hooks: The use of the useState hook allows for managing component state within functional components.
3. Conditional Rendering: The app uses conditional rendering to switch between adding a new todo and editing an existing one.
4. Event Handling: React event handlers are used to manage user interactions like adding, editing, and deleting todos.
5. CSS Styling: Custom CSS is used for styling the application, including a lamp animation and background icons.

### Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License
This project is open-source and available under the MIT License.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
