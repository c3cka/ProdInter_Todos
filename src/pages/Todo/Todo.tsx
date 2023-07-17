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
  const [title, setTitle] = useState<string>(todo?.title || '');
  const [desc, setDesc] = useState<string>('');

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

  const setTitleState = (event: any) => {
    setTitle(event.target.value);
  }

  const setDescState = (event: any) => {
    setDesc(event.target.value);
  }

  const onSave = () => {
    dispatch({
      type: 'edit',
      payload: {
        ...todo,
        title,
        description: desc
      }
    });
  }

  return (
    <Modal
      visible={!!todo}
      onClose={() => navigate('/todos')}
    >
      <div className="todo-page-root">
        <div className="todo-page-header">
          {/* {todo.title} */}
          <input
        type="text"
        placeholder="What's on your mind..."
        className="add-todo-box-input"
        value={title}
        onChange={(e) => {
          setTitleState(e);
        }}
      />
        </div>

        <textarea
          className="todo-page-description"
          autoFocus={true}
          placeholder="Enter description here..."
          onChange={(e) => {
            setDescState(e);
          }}
          value={desc}
        />
        <button onClick={onSave}>Save</button>
      </div>
    </Modal>
  )
}
