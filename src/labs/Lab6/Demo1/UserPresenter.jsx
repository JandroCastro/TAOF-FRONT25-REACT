

const UserPresenter = ({ users, showOnlyJ, onToggleFilter }) => {
  return (
    <div>
      <button onClick={onToggleFilter}>
        {showOnlyJ ? 'Mostrar todos' : 'Mostrar solo nombres que empiezan con J'}
      </button>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPresenter;
