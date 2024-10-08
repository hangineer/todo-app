<template>
  <div class="px-2">
    <h3
      v-if="!shouldDisplayForm"
      @click="shouldDisplayForm = !shouldDisplayForm"
    >
      + Add New
    </h3>
    <template v-else>
      <form @submit.prevent="handleOnSubmit">
        <div class="mt-4">
          <input v-model="newTodo.title" type="text" placeholder="Title" />
        </div>
        <div class="mt-4">
          <textarea
            v-model="newTodo.description"
            type="text"
            placeholder="Description"
          />
        </div>
        <button class="mr-4" type="submit">Submit</button>
        <button type="button" @click="resetForm">Cancel</button>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { TodoStructure, TodoStatus } from "@/types";
import useTodos from "@/store/useTodos";

interface Props {
  status: TodoStatus;
}
const props = defineProps<Props>();
const shouldDisplayForm = ref(false);

const { createTodo } = useTodos();

const newTodo = reactive<Omit<TodoStructure, "id">>({
  title: "",
  description: "",
  status: props.status,
});

const resetForm = () => {
  shouldDisplayForm.value = false;
  newTodo.title = "";
  newTodo.description = "";
};

const handleOnSubmit = () => {
  createTodo({
    id: Math.random() * 1000,
    ...newTodo,
  });
  resetForm();
};
</script>