<template>
  <TodoList class="w-1/3 m-5"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  components: {
    TodoList,
  },
})
</script>
