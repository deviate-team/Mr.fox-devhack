import { defineStore } from "pinia";
import { ITodoList } from "@/interfaces/todo";
import { mockup } from "@/mockup";

interface TodoState {
  todoList: ITodoList[];
}

export const useTodoStore = defineStore({
  id: "todo",
  state: (): TodoState => ({
    todoList: mockup as ITodoList[],
  }),
  getters: {
    getTodoListByStatusSearchAndPriority:
      (state: TodoState) =>
      (status: string, search: string, priority: string) => {
        return state.todoList
          .filter((todo: ITodoList) => todo.status === status)
          .filter((todo: ITodoList) => {
            return (
              todo.title.toLowerCase().includes(search.toLowerCase()) ||
              todo.description.toLowerCase().includes(search.toLowerCase())
            );
          })
          .filter(
            (todo: ITodoList) =>
              priority === "All" || todo.priority === priority
          );
      },
    getTodoById: (state: TodoState) => (id: number) => {
      return state.todoList.find((todo: ITodoList) => todo.id === id);
    },
  },
  actions: {
    addTodo(todo: ITodoList) {
      this.todoList.push({
        ...todo,
        id: this.todoList.length + 1,
      });
    },
    removeTodoById(id: number) {
      this.todoList = this.todoList.filter((todo: ITodoList) => todo.id !== id);
    },
    updateTodoById(id: number, newTodo: ITodoList) {
      const todo = this.todoList.find((todo: ITodoList) => todo.id === id);
      if (todo) {
        todo.title = newTodo.title;
        todo.description = newTodo.description;
        todo.status = newTodo.status;
        todo.priority = newTodo.priority;
        todo.dueDate = newTodo.dueDate;
      }
    },
    updateTodoStatusById(id: number, status: string) {
      const todo = this.todoList.find((todo: ITodoList) => todo.id === id);
      if (todo) {
        todo.status = status;
      }
    },
  },
});
