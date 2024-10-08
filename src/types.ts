export enum TodoStatus {
  Pending = 'pending',
  InProgress = 'inProgress',
  Completed = 'completed',
}

export interface TodoStructure {
  id: number;
  title: string;
  description: string;
  startDate?: string;
  endDate?: string;
  status: TodoStatus,
}