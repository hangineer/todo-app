<template>
  <div class="grid gap-4 grid-rows-1 mt-10 md:grid-cols-3">
    <div class="todo-block rounded-md bg-gray-200 p-2">
      <h3 class="text-xl font-bold ml-3 my-3">⚫️ Pending</h3>
      <TodoGroup :status="TodoStatus.Pending" />
    </div>
    <div class="todo-block rounded-md min-h-60 bg-blue-100 p-2">
      <h3 class="text-xl font-bold ml-3 my-3">🔵 In Progress</h3>
      <TodoGroup :status="TodoStatus.InProgress" />
    </div>
    <div class="todo-block rounded-md min-h-60 bg-lime-100 p-2">
      <h3 class="text-xl font-bold ml-3 my-3"> 🟢 Completed</h3>
      <TodoGroup :status="TodoStatus.Completed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TodoStatus } from "@/types";
import TodoGroup from "@/components/TodoGroup.vue";
</script>

<style scoped>
.todo-block {
  min-height: 75vh;
}
</style>