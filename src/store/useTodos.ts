import { TodoStatus,  type TodoStructure } from '@/types';
import { reactive, computed } from 'vue';


interface TodoStore {
  [TodoStatus.Pending]: TodoStructure[];
  [TodoStatus.InProgress]: TodoStructure[];
  [TodoStatus.Completed]: TodoStructure[];
}

const defaultList = {
  [TodoStatus.Pending]: [
    // 先預設加入一個待辦
    {
      id: 1,
      title: "寫鐵人賽",
      description: "主題：實作",
      status: TodoStatus.Pending,
    },
  ],
  [TodoStatus.InProgress]: [],
  [TodoStatus.Completed]: [],
}

const todoStore = reactive<TodoStore>(defaultList);

export default () => {
  // 取得
  const getTodoByStatus = () => (status: TodoStatus) => {
    return computed(() => todoStore[status]);
  }
  // 新增
  const createTodo = (todo: TodoStructure) => {
    todoStore[todo.status].push(todo);
  }
  // 刪除
  const deleteTodo = (todo: TodoStructure) => {
    todoStore[todo.status] = todoStore[todo.status].filter(item => item.id !== todo.id);
  }
  // 修改
  const updateTodo = (todo: TodoStructure, newStatus: TodoStatus) => {
    todo.status = newStatus;
  }

  return {
    getTodoByStatus,
    createTodo,
    deleteTodo,
    updateTodo
  };
};