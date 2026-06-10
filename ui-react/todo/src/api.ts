const randomDelay = () => Math.floor(Math.random() * 500 + 100);

export type Task = {
  id: string;
  status: 'todo' | 'done';
  content: string;
};

const TASKS: Task[] = [
  { id: crypto.randomUUID(), status: 'todo', content: 'Watch a movie' },
  { id: crypto.randomUUID(), status: 'todo', content: 'Buy a book' },
];

export function getTasks(): Promise<Task[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(TASKS.slice()), randomDelay())
  );
}

export function createTask(content: string): Promise<Task> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const newItem = {
        id: crypto.randomUUID(),
        status: 'todo',
        content,
      } as const;
      TASKS.push(newItem);
      resolve(newItem);
    }, randomDelay())
  );
}

export function removeTask(id: string): Promise<Task> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const toRemoveIndex = TASKS.findIndex((item) => item.id === id);
      if (toRemoveIndex >= 0) {
        const toRemove = TASKS[toRemoveIndex];
        TASKS.splice(toRemoveIndex, 1);
        resolve(toRemove);
      } else reject('Not found');
    }, randomDelay())
  );
}

export function updateTask(
  id: string,
  updates: { status: Task['status'] }
): Promise<Task> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const toUpdate = TASKS.find((item) => item.id === id);
      if (toUpdate) {
        toUpdate.status = updates.status;
        resolve(toUpdate);
      } else reject('Not found');
    }, randomDelay())
  );
}
