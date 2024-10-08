<template>
  <div>
    <!-- 先註解 -->
    <!-- <h3>{{ groupLabel[props.status] }}</h3> -->

    <Draggable
      class="draggable px-2"
      :list="todoList"
      group="todos"
      itemKey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li class="bg-slate-50 relative px-4 py-1 rounded list-none">
          <div>
            <h3>Title: {{ todo.title }}</h3>
            <hr class="my-1">
            <p>Description: {{ todo.description }}</p>
          </div>
          <span class="absolute right-2 top-0 cursor-pointer text-red-400 text-lg font-bold" @click="deleteTodo(todo)">X</span>
        </li>
      </template>
    </Draggable>

    <CreateTodo class="mt-10" :status="props.status" />
  </div>
</template>

<script setup lang="ts">
import { TodoStatus } from "@/types";
import Draggable from "vuedraggable";
import useTodos from "@/store/useTodos";
import CreateTodo from "@/components/CreateTodo.vue";

interface Props {
  status: TodoStatus;
}

const props = defineProps<Props>();

const {
  getTodoByStatus,
  deleteTodo,
  updateTodo
} = useTodos();

const todoList = getTodoByStatus(props.status);

const groupLabel = {
  [TodoStatus.Pending]: "Pending",
  [TodoStatus.InProgress]: "In Progress",
  [TodoStatus.Completed]: "Completed",
};

const onDraggableChange = (payload: any) => {
  console.log('payload',payload)
  if (payload?.added?.element?.status) {
    updateTodo(payload?.added?.element, props.status);
  }
};
</script>