import React from 'react';

const UserList = React.memo(({ user }) => {
  return (
    <>
      <li>
        <p>
          {`${user.id} ${user.name} ${user.profile}`}
          <button>編集</button>
          <button>削除</button>
        </p>
      </li>
    </>
  );
});

export default UserList;
