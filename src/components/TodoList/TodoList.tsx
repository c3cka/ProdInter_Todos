import TodoItem from 'components/TodoItem/TodoItem';
import TodoListEmptyState from 'components/TodoList/TodoListEmptyState';
import { FilterOption } from 'components/TabGroup/TabGroup';
import { ITodo } from 'utils/types';
import './TodoList.css';

interface TodoListProps {
  todos: ITodo[];
  filterBy: FilterOption;
  deleteTodo: (todo: ITodo) => void
  toggleTodoCompletion: (todo: ITodo) => void
}

export default function TodoList({ todos, deleteTodo, toggleTodoCompletion, filterBy }: TodoListProps) {
  const filteredTodoList = todos.filter((todo) => {
    switch (filterBy) {
      case 'pending':
        return !todo.complete;

      case 'completed':
        return todo.complete;

      default:
        return true;
    }
  });

  if (filteredTodoList.length === 0) {
    return <TodoListEmptyState
      filterOption={filterBy}
    />
  }

  return (
    <ul className="todo-list-root">
      {filteredTodoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => deleteTodo(todo)}
          onToggleCompletion={() => toggleTodoCompletion(todo)}
        />
      ))}
    </ul>
  )
}
