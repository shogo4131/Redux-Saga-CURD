import React from 'react';

const UserList = ({ user }) => {
  return (
    <>
      <li>
        <p>{`${user.id} ${user.name} ${user.profile}`}</p>
      </li>
    </>
  );
};

export default UserList;
