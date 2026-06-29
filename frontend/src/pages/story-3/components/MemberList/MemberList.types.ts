export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  avatarUrl?: string;
}

export interface MemberListProps {
  members: Member[];
  onRemoveMember: (id: string) => void;
  onUpdateRole: (id: string, newRole: Member['role']) => void;
  isLoading?: boolean;
  error?: string | null;
}
