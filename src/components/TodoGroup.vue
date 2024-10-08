<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>

    <Draggable
      class="draggable"
      :list="todoList"
      group="todos"
      itemKey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          <span class="delete-icon" @click="deleteTodo(todo)">X</span>
          <div>
            <span class="todo-description">{{ todo.description }}</span>
          </div>
        </li>
      </template>
    </Draggable>

    <CreateTodo :status="props.status" />
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
  if (payload?.added?.element?.status) {
    updateTodo(payload?.added?.element, props.status);
  }
};
</script>