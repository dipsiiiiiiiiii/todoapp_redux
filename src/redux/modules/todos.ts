const ADD_TO_DO = "todos/ADD_TO_DO" as const;
const DELETE_TO_DO = "todos/DELETE_TO_DO" as const;
const TOGGLE_TO_DO = "todos/TOGGLE_TO_DO" as const;

let nextId = 1;

export const addToDo = (text: string) => ({
  type: ADD_TO_DO,
  payload: {
    id: nextId++,
    text,
  },
});
export const deleteToDo = (id: number) => ({ type: DELETE_TO_DO, payload: id });
export const toggleToDo = (id: number) => ({ type: TOGGLE_TO_DO, payload: id });

type TodosAction =
  | ReturnType<typeof addToDo>
  | ReturnType<typeof toggleToDo>
  | ReturnType<typeof deleteToDo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [];

function todos(state: TodosState = initialState, action: TodosAction) {
  switch (action.type) {
    case ADD_TO_DO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TO_DO:
      return state.map(
        (todo) =>
          todo.id === action.payload // id 가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );
    case DELETE_TO_DO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
