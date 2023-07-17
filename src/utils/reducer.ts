import {
  ITodo,
  TodoId,
  ReducerAction,
  ITodoAttrs,
  AddAction,
  RemoveAction,
} from './types';

function addTodoItem(state: ITodo[], partialTodoItem: AddAction['payload']) {
  return [{
      ...partialTodoItem,
      id: Date.now().toString()
    },
    ...state
  ];
}

function removeTodoItem(state: ITodo[], id: RemoveAction['payload']) {
  return state.filter((todoItem) => todoItem.id !== id);
}

function editTodoItem(
  state: ITodo[],
  id: TodoId,
  editedTodoItemCallback: (targetTodoItem: ITodo) => Partial<ITodoAttrs>
) {
  return state.map((todoItem) => {
    if (todoItem.id === id) {
      return {
        ...todoItem,
        ...editedTodoItemCallback(todoItem)
      };
    }

    return todoItem;
  });
}

export default function reducer(
  state: ITodo[],
  action: ReducerAction,
) {
  switch (action.type) {
    case 'add':
      const todoItem = action.payload;
      return addTodoItem(state, todoItem);

    case 'remove':
      const removeId = action.payload;
      return removeTodoItem(state, removeId);

    case 'edit':
      const editPayload = action.payload;
      const editId = editPayload.id;

      return editTodoItem(state, editId, () => ({
        title: editPayload.title,
        description: editPayload.description
      }));

    case 'toggleCompletion':
      const toggleId = action.payload;

      return editTodoItem(state, toggleId, (todoItem) => ({
        complete: !todoItem.complete,
      }));

    default:
      return state;
  }
}
