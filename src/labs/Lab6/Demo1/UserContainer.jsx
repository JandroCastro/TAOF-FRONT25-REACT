import React, { useState } from 'react';
import UserPresenter from './UserPresenter';



const initialUsers = [
  { id: 1, name: 'Juan', email: 'juan@mail.com' },
  { id: 2, name: 'Ana', email: 'ana@mail.com' },
  { id: 3, name: 'Luis', email: 'luis@mail.com' },
];

const UserContainer = () => {
  const [showOnlyJ, setShowOnlyJ] = useState(false);

  const toggleFilter = () => setShowOnlyJ(!showOnlyJ);

  const filteredUsers = showOnlyJ ? initialUsers.filter(u => u.name.startsWith('J')) : initialUsers;

  return <UserPresenter users={filteredUsers} onToggleFilter={toggleFilter} showOnlyJ={showOnlyJ} />;
};

export default UserContainer;
