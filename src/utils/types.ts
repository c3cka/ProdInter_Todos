export type TodoId = string;

export interface IUser {
  type: 'users'
  id: string
  attributes: {
    email: string
    first_name: string
    last_name: string
  }
}

export interface ITodoAttrs {
  title: string;
  description: string;
  complete: boolean;
}

export interface ITodo extends ITodoAttrs {
  id: TodoId;
}

interface GenericAction {
  type: string;
  payload: any;
}

export interface AddAction extends GenericAction {
  type: 'add';
  payload: ITodoAttrs;
}

export interface RemoveAction extends GenericAction {
  type: 'remove';
  payload: ITodo['id'];
}

export interface EditAction extends GenericAction {
  type: 'edit';
  payload: {
    id: ITodo['id'],
    title: ITodo['title'],
    description: ITodo['description']
  };
}

export interface ToggleCompletionAction extends GenericAction {
  type: 'toggleCompletion';
  payload: ITodo['id'];
}

export type ReducerAction =
  | AddAction
  | RemoveAction
  | EditAction
  | ToggleCompletionAction;
