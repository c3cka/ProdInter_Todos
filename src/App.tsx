import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from './pages/Index/Index';
import LoginPage from './pages/Login/Login';
import TodosPage from './pages/Todos/Todos';
import TodoPage from './pages/Todo/Todo';
import TodosProvider from './providers/Todos';
import './App.css';

function App() {
  return (
    <TodosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </TodosProvider>
  )
}

export default App;
