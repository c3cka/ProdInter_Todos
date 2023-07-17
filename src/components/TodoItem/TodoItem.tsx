import { ITodo } from 'utils/types';
import { TrashIcon } from '@iconicicons/react';
import TodoItemActionButton, { TodoItemActionButtonProps } from './TodoItemActionButton';
import { useNavigate } from 'react-router-dom';
import './TodoItem.css';

interface TodoItemProps {
  todo: ITodo;
  onDelete: () => void;
  onToggleCompletion: () => void;
}

export default function TodoItem({ todo, onDelete, onToggleCompletion }: TodoItemProps) {
  const todoListItemActions: TodoItemActionButtonProps[] = [];

  todoListItemActions.push({
    title: 'Delete Item',
    ariaLabel: `Delete Item "${todo.title}"`,
    Icon: <TrashIcon />,
    onClick: onDelete,
  });

  const navigate = useNavigate();

  return (
    <div
      className="todo-item-root"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          navigate(`/todos/${todo.id}`);
        }
      }}
    >
      <div className="todo-item-primary-content">
        <input
          type="checkbox"
          checked={todo.complete}
          id={`checkbox-${todo.id}`}
          title={`Mark item "${todo.title}" as ${todo.complete ? 'pending' : 'completed'}`}
          onChange={onToggleCompletion}
        />

        <label
          className="todo-item-label"
          htmlFor={`checkbox-${todo.id}`}
        >
          {todo.title}
        </label>
      </div>

      <div className="todo-item-actions-group">
        {todoListItemActions.map((action) => (
          <TodoItemActionButton
            key={action.title}
            Icon={action.Icon}
            ariaLabel={action.ariaLabel}
            title={action.title}
            onClick={action.onClick}
          />
        ))}
      </div>
    </div>
  )
}
