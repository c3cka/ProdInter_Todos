import './TodoItemActionButton.css';

export interface TodoItemActionButtonProps {
  Icon: JSX.Element;
  ariaLabel: string;
  title: string;
  onClick: () => void;
}

export default function TodoItemActionButton({ Icon, ariaLabel, title, onClick }: TodoItemActionButtonProps) {
  return (
    <button
      className="todo-item-button"
      type="button"
      title={title}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      { Icon }
    </button>
  )
}
