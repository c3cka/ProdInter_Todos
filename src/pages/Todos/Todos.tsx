import React, { useState, useEffect, useContext } from 'react';
import AddTodoBox from 'components/AddTodoBox/AddTodoBox';
import TabGroup, { FilterOption } from 'components/TabGroup/TabGroup';
import TodoList from 'components/TodoList/TodoList';
import { Outlet, useNavigate } from 'react-router-dom';
import {TodosContext} from 'providers/Todos';
import MainLayout from 'components/MainLayout/MainLayout';
import { isAuthenticated } from 'utils/auth';
import './Todos.css';

export default function Todos() {
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const navigate = useNavigate();
  const {todos, dispatch} = useContext(TodosContext);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  });

  return (
    <React.Fragment>
      <MainLayout>
        <div className="todos-page-root">
          <AddTodoBox />

          <TabGroup
            activeFilter={filterBy}
            onFilterChange={setFilterBy}
          />
        </div>

        <TodoList
          todos={todos}
          filterBy={filterBy}
          deleteTodo={(todo) => dispatch({type: 'remove', payload: todo.id})}
          toggleTodoCompletion={(todo) => dispatch({type: 'toggleCompletion', payload: todo.id})}
        />

      </MainLayout>
    </React.Fragment>
  )
}
