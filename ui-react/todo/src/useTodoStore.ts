import { useEffect, useState } from "react";
import { createTask, getTasks, removeTask, updateTask, type Task } from "./api";

function useTodoStore() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [fetching, setSetching] = useState<boolean>(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setSetching(true);
    await getTasks()
      .then((tasks) => {
        setTodos(tasks);
      })
      .finally(() => setSetching(false));
  };

  return {
    fetching,
    addTodo: async (args: { content: string }) => {
      await createTask(args.content);
      await fetchTodos();
    },
    removeTodo: async (args: { id: string }) => {
        await removeTask(args.id)
        await fetchTodos();
    },
    updateTodoDone: async (id: string, status: Task['status']) => {
      await updateTask(id, { status });
      await fetchTodos();
    },
    store: { todos },
  };
}

export default useTodoStore;
