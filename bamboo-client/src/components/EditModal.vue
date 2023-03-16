<script setup lang="ts">
import { ITodoList } from "@/interfaces/todo";
import { computed } from "vue";
import { useTodoStore } from "@/store/todo";

const emit = defineEmits(["close"]);
const store = useTodoStore();

const { selectId } = defineProps<{
  selectId: number;
}>();

const todo = computed(() => {
  return store.getTodoById(selectId);
});

const copyTodo = computed(() =>
  JSON.parse(JSON.stringify(todo.value as ITodoList))
);

const deleteTodo = () => {
  if (confirm("Are you sure you want to delete this task?")) {
    store.removeTodoById(selectId);
    emit("close", false);
  }
};

const updateTodo = () => {
  if (confirm("Are you sure you want to update this task?")) {
    store.updateTodoById(selectId, copyTodo.value as ITodoList);
    emit("close", false);
  }
};

const dueDate = computed(() => {
  if ((copyTodo.value as ITodoList).dueDate) {
    return (copyTodo.value as ITodoList).dueDate.split("T")[0];
  }
});
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden bg-black bg-opacity-50 md:inset-0 md:h-full min-h-screen"
  >
    <div
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 lg:max-w-screen-md lg:w-full px-2 py-5 bg-white rounded-lg shadow-lg sm:p-7"
    >
      <div class="flex items-center justify-between mb-2">
        <h3 class="pl-6 text-2xl font-bold text-black">Edit Task</h3>
        <button
          @click="emit('close', false)"
          class="pb-2 pr-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <img src="/close.svg" />
        </button>
      </div>
      <div class="p-6 space-y-6">
        <form>
          <div class="relative z-0 w-full group mb-6">
            <input
              type="text"
              name="task_title"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-darkcyanhover peer"
              placeholder=" "
              v-model="(copyTodo as ITodoList).title"
              required
            />
            <label
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkcyan peer-focus:dark:text-darkcyanhover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Task Title</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="task_description"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-darkcyanhover peer"
              placeholder=" "
              v-model="(copyTodo as ITodoList).description"
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-darkcyan peer-focus:dark:text-darkcyanhover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Task Desciption</label
            >
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Priority
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  v-model="(copyTodo as ITodoList).priority"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <img src="/plus.svg" />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Status
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  v-model="(copyTodo as ITodoList).status"
                >
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <img src="/plus.svg" />
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Due Date
              </label>
              <input
                v-model="dueDate"
                type="date"
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
        </form>
        <button
          type="button"
          @click="updateTodo"
          class="text-white bg-darkcyan hover:bg-darkcyanhover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:mr-4 sm:w-auto px-5 py-2.5 text-center mt-6"
        >
          Update Task
        </button>
        <button
          @click="deleteTodo"
          type="button"
          class="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-6"
        >
          Delete Task
        </button>
      </div>
    </div>
  </div>
</template>
