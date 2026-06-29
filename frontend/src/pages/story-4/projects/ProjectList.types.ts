export interface Project {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  lastUpdated: string;
}

export interface ProjectListProps {
  projects: Project[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: string) => void;
}
