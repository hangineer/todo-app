<template>
  <div>
    <!-- <DatePicker v-model="date" /> -->
    <TodoGroup :status="TodoStatus.Todo"/>
    <TodoGroup :status="TodoStatus.InProgress"/>
    <TodoGroup :status="TodoStatus.Completed"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TodoStatus } from '@/type';
import TodoGroup from '@/components/TodoGroup.vue';

export default defineComponent({
  components: {
    TodoGroup,
  },
  data() {
    return {
      // date: null,
      TodoStatus,
    }
  },
})
</script>