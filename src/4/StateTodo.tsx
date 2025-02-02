import { useRecoilState } from "recoil";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";
import { Button } from "@/components/ui/Button";
import { idsAtom, todoListSelector } from "./stores/atomUp";
// TOdo項目idの最大値（登録都度にインクリメンと）

export const RecoilTodoUp: React.FC = () => {
  // 入力値(title), TOdoリスト（todo)をStateで管理
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useRecoilState(todoListSelector);
  const [ids, setIds] = useRecoilState(idsAtom);

  //テキストボックスへの入力をStateに反映
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    // 新規のTodoを追加
    const newId = Math.max(...(ids.length ? ids : [0])) + 1;
    const newItem = { id: newId, title, isDone: false };
    setTodo((prev) => [...prev, newItem]);
    setIds((prev) => [...prev, newId]);
    setTitle("");
  };

  const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number((e.target as HTMLButtonElement).dataset.id); // ✅ 明示的にキャスト
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: true, type: item.type } : item,
      ),
    );
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number((e.target as HTMLButtonElement).dataset.id);
    setTodo(todo.filter((item) => item.id !== id));
    setIds(ids.filter((i) => i !== id));
  };

  // 次のソート方向（降順であればtrue)
  const [desc, setDesc] = useState(true);

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    //既存のtodoリストを複製の上でソート
    const sorted = [...todo];
    sorted.sort((m, n) => {
      const mTime = m.created?.getTime() ?? 0;
      const nTime = n.created?.getTime() ?? 0;
      // desc値に応じて照準/降順を決定
      return desc ? nTime - mTime : mTime - nTime;
    });
    //desc値を反転
    setDesc((d) => !d);
    //ソート済みのリストを再セット
    setTodo(sorted);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newTodo = Array.from(todo || []);
    const [movedItem] = newTodo.splice(result.source.index, 1);
    newTodo.splice(result.destination.index, 0, movedItem);

    setTodo(newTodo);
    setIds(newTodo.map((item) => item.id));
  };

  return (
    <div>
      <label>
        やること：
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          className="border p-1"
        />
      </label>
      <Button onClick={handleAdd}>追加</Button>
      <Button onClick={handleSort}>ソート ({desc ? "↑" : "↓"}) </Button>
      <hr />
      {/* Todoをリストに整形 */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todoList">
          {(provided: DroppableProvided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todo.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={String(item.id)}
                  index={index}
                >
                  {(provided: DraggableProvided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.title} {item.isDone ? "✔️" : ""}
                      <Button onClick={handleDone} data-id={item.id}>
                        {" "}
                        完了
                      </Button>
                      <Button onClick={handleRemove} data-id={item.id}>
                        削除
                      </Button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
