import { MemberListProps } from './MemberList.types';

export const MemberList = ({ members, onRemoveMember, onUpdateRole, isLoading, error }: MemberListProps) => {
  if (isLoading) {
    return <div className="p-4 text-center text-gray-500">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 bg-red-50 rounded-md">Error: {error}</div>;
  }

  if (!members.length) {
    return <div className="p-4 text-center text-gray-500">No members found in this workspace.</div>;
  }

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="whitespace-nowrap px-3 py-4 text-sm">
                <div className="font-medium text-gray-900">{member.name}</div>
                <div className="text-gray-500">{member.email}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as any)}
                  className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
