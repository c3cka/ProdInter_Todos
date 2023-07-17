import { SetStateAction, useContext, useState } from 'react';
import { PlusIcon } from '@iconicicons/react';
import {TodosContext} from 'providers/Todos';
import './AddTodoBox.css';

export default function AddTodoBox() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [title, setTitle] = useState('');
  const [isError, setIsError] = useState(false);
  const { dispatch } = useContext(TodosContext);

  const onSubmit = () => {
    if (title.trim().length === 0) {
      setIsError(true);
      return;
    };

    dispatch({
      type: 'add',
      payload: {
        title: title,
        complete: false,
        description: ''
      }
    });

    setTitle('');
  }

  const setTitleState = (e: SetStateAction<string>) => {
    setTitle(e);
  }

  return (
    <form
      className="add-todo-box-root"
      data-active={isInputFocused}
      data-error={isError}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <span className="add-todo-box-leading">
        &gt;
      </span>

      <input
        type="text"
        placeholder="What's on your mind..."
        className="add-todo-box-input"
        value={title}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => {
          setIsInputFocused(false);
          setIsError(false);
        }}
        onChange={(e) => {
          setTitleState(String(e));
          setIsError(false);
        }}
      />

      <div className="add-todo-button-root">
        <button
          type="submit"
          className="add-todo-button"
          title="Add todo"
          disabled={(title.trim()).length === 0}
        >
          <PlusIcon />
        </button>
      </div>
    </form>
  )
}
