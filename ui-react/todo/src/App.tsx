// The TODOs

import { useRef } from "react";
import type { Task } from "./api";
import useTodoStore from "./useTodoStore";

// 1. Using the mock APIs (in `api.ts`) to implement the requirements:
//    a. I can add a new TODO item by clicking the "Add" button.
//    b. I can complete a TODO item by clicking the checkbox on its left. It should then be transfered to the "Done" list.
//    c. I can uncomplete an item in the "Done" list by clicking the checkbox on its left. It should then be transfered to the "TODO" list.
//    d. I can remove the item by clicking the X button on its right.
// Make sure the async operations are properly handled.
// Don't waste time on making buttons or texts look nice, as long as the layout is clear

// 2. Write tests to cover the use cases

function App() {
  const { store, fetching, ...storeApi } = useTodoStore();
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTodoCheckboxClick = (todo: Task) => {
    storeApi.updateTodoDone(todo.id, todo.status == "done" ? "todo" : 'done')
  }

  const handleDeleteClick = (todo: Task) => {
    storeApi.removeTodo({ id: todo.id })
  }

  const handleAddClick = async () => {
    const newTodoContent = inputRef.current?.value
    if(newTodoContent) {
      await storeApi.addTodo({content: newTodoContent})
      if(inputRef.current) inputRef.current.value = ""
    }
  }

  const pendingTodos = store.todos.filter((todo) => todo.status == 'todo')
  const doneTodos = store.todos.filter((todo) => todo.status == 'done')

  return (
    <>
      <div>
        <input placeholder="TODO" ref={inputRef} />
        <button onClick={() => handleAddClick()}>Add</button>
      </div>

      <div>
        <h1>TODO</h1>
        {pendingTodos.map((todo, index) => {
          return (
            <div style={{ marginTop: 12 }} key={index}>
              <input
                type="checkbox"
                checked={todo.status === "done"}
                onClick={() => handleTodoCheckboxClick(todo)}
              />
              {todo.content}
              <button onClick={() => handleDeleteClick(todo)}>X</button>
            </div>
          );
        })}
      </div>

      <div>
        <h1>Done</h1>
        {doneTodos.map((todo, index) => {
          return (
            <div style={{ marginTop: 12 }} key={index}>
              <input
                type="checkbox"
                checked={todo.status === "done"}
                onClick={() => handleTodoCheckboxClick(todo)}
              />
              {todo.content}
              <button onClick={() => handleDeleteClick(todo)}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
