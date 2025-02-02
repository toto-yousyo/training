import { atom, atomFamily, selector } from "recoil";

type TodoItem = {
  id: number;
  title: string;
  isDone: boolean;
  created?: Date; // 必要なら追加
  type?: string;
};
// id を管理するためのAtom
export const idsAtom = atom<number[]>({
  key: "idsAtom",
  default: [],
});

// 個々の Todo 項目を Atom として管理
export const todoAtom = atomFamily<TodoItem, number>({
  key: "todoAtom",
  default: (id) => ({ id, title: "", isDone: false }),
});

// Todoリストを取得・更新するためのセレクター
export const todoListSelector = selector<TodoItem[]>({
  key: "todoListSelector",
  get: ({ get }) => {
    const ids: number[] = get(idsAtom);
    return ids.map((id) => {
      const todo = get(todoAtom(id));
      return todo ?? { id, title: "", isDone: false };
    });
  },
  set: (
    { set, reset }, newValue) => {
    if (!Array.isArray(newValue))
    }
    action:
      | { type: "add"; newItem: TodoItem }
    | { type: "done" | "remove"; id: number },
  ) => {
  switch (action.type) {
    case "add":
      set(todoAtom(action.newItem.id), action.newItem);
      set(idsAtom, (ids) => [...ids, action.newItem.id]);
      break;
    case "done":
      set(todoAtom(action.id), (todo) =>
        todo
          ? { ...todo, isDone: true }
          : { id: action.id, title: "", isDone: true },
      );
      break;
    case "remove":
      set(idsAtom, (ids) => ids.filter((e) => e !== action.id));
      reset(todoAtom(action.id));
      break;
    default:
      throw new Error(`Type is invalid: ${action.type}`);
  }
},
});
