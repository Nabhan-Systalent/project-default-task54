export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export interface BoardColumn {
  id: 'todo' | 'in-progress' | 'done';
  title: string;
}
