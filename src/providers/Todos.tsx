import { createContext, Dispatch, PropsWithChildren } from 'react';
import { ITodo, ReducerAction } from '../utils/types';
import reducer from 'utils/reducer';
import { useReducer } from 'react';

interface ITodosContext {
  todos: ITodo[];
  dispatch: Dispatch<ReducerAction>;
}

export const TodosContext = createContext<ITodosContext>({todos: [], dispatch: () => {}});
const titles = ['Never', 'Gonna', 'Give you up'];

const defaultTodos = Array.from({length: 3}).map((_, i) => {
  return {id: String(i), title: titles[i % titles.length], description: '', complete: false}
});

export default function TodosProvider({children}: PropsWithChildren<{}>) {
  const [todos, dispatch] = useReducer(reducer, defaultTodos);

  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {children}
    </TodosContext.Provider>
  );
}
