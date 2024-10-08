<template>
  <div>
    <h3
      v-if="!shouldDisplayForm"
      @click="shouldDisplayForm = !shouldDisplayForm"
    >
      + Add New
    </h3>
    <template v-else>
      <form @submit.prevent="handleOnSubmit">
        <div>
          <input v-model="newTodo.title" type="text" placeholder="Title" />
        </div>
        <div>
          <textarea
            v-model="newTodo.description"
            type="text"
            placeholder="Title"
          />
        </div>

        <button type="submit">Submit</button>
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