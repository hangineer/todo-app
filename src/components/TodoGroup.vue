<template>
  <h3>{{ groupName }}</h3>
  <!-- todo -->
  <ul>
    <li v-for="item in todoList" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TodoStatus, type TodoStructure } from '@/type';

interface Props {
  status : TodoStatus,
}

export default defineComponent ({
  props: {
    status: {
      type: String as () => TodoStatus,
      required: true,
    },
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: 'Learn TypeScript',
          description: 'spend at least 1 hour per week.',
          startDate: '',
          endDate: '',
          status: TodoStatus.Todo
        }
      ] as TodoStructure[]
    };
  },
  computed: {
    groupName() {
      switch(this.status) {
        case(TodoStatus.Todo):
          return 'Todo';
        case(TodoStatus.InProgress):
          return 'In Progress';
        case(TodoStatus.Completed):
          return 'Completed';
          default:
            return 'Todo List'
      }
    }
  },
})
</script>