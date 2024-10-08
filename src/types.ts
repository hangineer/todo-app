export enum TodoStatus {
  Pending = 'pending',
  InProgress = 'inProgress',
  Completed = 'completed',
}

export interface TodoStructure {
  id: number;
  title: String;
  description: String;
  startDate?: String;
  endDate?: String;
  status: TodoStatus,
}