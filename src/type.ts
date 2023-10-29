enum TodoStatus {
  Todo = 'todo',
  InProgress = 'inProgress',
  Completed = 'completed',
}

interface TodoStructure {
  id: number;
  title: String;
  description: String;
  startDate: String;
  endDate: String;
  status: TodoStatus,
}

export {
  TodoStatus,
  TodoStructure,
}