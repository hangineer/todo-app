<template>
    <div class="container mx-auto p-4">
    <div class="w-100 bg-blue-200 rounded-md">
      <h1 class="px-5 py-4 text-2xl text-cyan-500 font-bold tracking-wide md:text-5xl">🤟 Let's kick off the day</h1>
    </div>
    <TodoList/>
  </div>
</template>

<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
</script>