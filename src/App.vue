<template>
  <div class="app-wrapper">
    <div class="wrapper">
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>