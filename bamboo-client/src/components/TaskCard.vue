<script setup lang="ts">
import { ITodoList } from "@/interfaces/todo";
import { Ref, ref } from "vue";

const { task } = defineProps<{ task: ITodoList; showModal: boolean }>();

const color: Ref<{ [key: string]: string }> = ref({
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
  default: "bg-gray-500",
});

const emit = defineEmits(["show"]);
</script>

<template>
  <div
    @click="emit('show', !showModal)"
    class="bg-white rounded-lg p-4 my-4 shadow-md cursor-pointer"
  >
    <h3 class="font-semibold">{{ task.title }}</h3>
    <div class="text-sm flex justify-between mt-5">
      <div class="flex space-x-4">
        <p
          class="text-white px-4 rounded-2xl text-xs py-[2px]"
          :class="color[task.priority]"
        >
          {{ task.priority }}
        </p>
      </div>
      <div>
        <p class="text-darkgrayisblue font-medium">3 day left</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
