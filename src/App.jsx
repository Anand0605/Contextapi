// import React from 'react';
// import Header from './components/Header';
// import ThemeToggler from './components/ThemeToggler';
// import AppContainer from './components/AppContainer';

// const App = () => {
//   return (
//     <AppContainer>
//       <Header />
//       <ThemeToggler />
//     </AppContainer>
//   );
// };

// export default App;

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Taskify</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
