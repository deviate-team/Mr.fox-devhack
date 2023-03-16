<script setup lang="ts">
import { Ref, ref } from "vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import TaskCard from "@/components/TaskCard.vue";
import { useTodoStore } from "@/store/todo";
import EditModal from "@/components/EditModal.vue";

const search: Ref<string> = ref("");
const priority: Ref<string> = ref("All");
const selectId = ref();

const store = useTodoStore();

const getTodoListByStatusSearchAndPriority = (
  status: string,
  search: string,
  priority: string
) => {
  return store.getTodoListByStatusSearchAndPriority(status, search, priority);
};

const showModal: Ref<boolean> = ref(false);
</script>

<template>
  <BaseLayout>
    <div class="min-h-screen">
      <div>
        <h1 class="text-4xl font-semibold text-verydarkblue mb-4">Board</h1>
      </div>
      <div class="flex flex-row items-center mb-4 space-x-4">
        <input
          type="text"
          class="w-full max-w-md block border-2 border-gray-200 rounded-lg p-2 font-medium text-verydarkblue focus:outline-none focus:border-darkcyan"
          v-model="search"
          placeholder="Search.."
        />
        <select v-model="priority" class="p-3 bg-cream rounded-lg text-verydarkblue">
          <option value="All" selected>All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-cream rounded-lg p-4">
          <div>
            <h3 class="font-semibold text-verydarkblue">
              Todo:
              <span>{{
                getTodoListByStatusSearchAndPriority("Todo", search, priority)
                  .length
              }}</span>
            </h3>
          </div>
          <div
            v-for="todo in getTodoListByStatusSearchAndPriority(
              'Todo',
              search,
              priority
            )"
          >
            <TaskCard
              @click="selectId = todo.id"
              :task="todo"
              :show-modal="showModal"
              @show="(show) => (showModal = show)"
            />
          </div>
        </div>
        <div class="bg-cream rounded-lg p-4">
          <div>
            <h3 class="font-semibold text-verydarkblue">
              In Progress: 
              <span>{{
                getTodoListByStatusSearchAndPriority(
                  "In Progress",
                  search,
                  priority
                ).length
              }}</span>
            </h3>
          </div>
          <div
            v-for="inprogress in getTodoListByStatusSearchAndPriority(
              'In Progress',
              search,
              priority
            )"
          >
            <TaskCard
              @click="selectId = inprogress.id"
              :task="inprogress"
              :show-modal="showModal"
              @show="(show) => (showModal = show)"
            />
          </div>
        </div>
        <div class="bg-cream rounded-lg p-4">
          <div>
            <h3 class="font-semibold text-verydarkblue">
              Done:
              <span>{{
                getTodoListByStatusSearchAndPriority("Done", search, priority)
                  .length
              }}</span>
            </h3>
          </div>
          <div
            v-for="done in getTodoListByStatusSearchAndPriority(
              'Done',
              search,
              priority
            )"
          >
            <TaskCard
              @click="selectId = done.id"
              :task="done"
              :show-modal="showModal"
              @show="(show) => (showModal = show)"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <EditModal
        :select-id="selectId"
        v-if="showModal"
        @close="(show) => (showModal = show)"
      />
    </div>
  </BaseLayout>
</template>
