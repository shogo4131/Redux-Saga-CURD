import React from 'react';

const UserList = React.memo(({ user, clickDeleteUser, clickEditUser }) => {
  return (
    <>
      <li>
        <p>
          {`${user.name} ${user.profile}`}
          <button onClick={() => clickEditUser(user.id)}>編集</button>
          <button onClick={() => clickDeleteUser(user.id)}>削除</button>
        </p>
      </li>
    </>
  );
});

export default UserList;
