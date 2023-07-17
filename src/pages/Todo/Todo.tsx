import { useContext, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import {TodosContext} from 'providers/Todos';
import { isAuthenticated } from 'utils/auth';
import './Todo.css';

export default function DetailsPage() {
  const {dispatch, todos} = useContext(TodosContext);
  const params = useParams();
  const todo = todos.find((todo) => todo.id === params.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }

    if (!todo) {
      navigate('/todos')
    }
  });

  if (!todo) {
    return null;
  }

  return (
    <Modal
      visible={!!todo}
      onClose={() => navigate('/todos')}
    >
      <div className="todo-page-root">
        <div className="todo-page-header">
          {todo.title}
        </div>

        <textarea
          className="todo-page-description"
          autoFocus={true}
          placeholder="Enter description here..."
          onChange={(e) => {
            dispatch({
              type: 'edit',
              payload: {
                ...todo, description: e.target.value
              }
            });
          }}
          value={todo.description}
        />
      </div>
    </Modal>
  )
}
