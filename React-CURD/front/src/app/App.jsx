import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../components/header/container/index';
import { Search } from '../components/search/container/index';
import { UserList } from '../components/userList/container/index';
import { List } from './style';
import api from '../api/api';

const App = () => {
  const [userList, setUserList] = useState(null);

  // User API Call
  useEffect(() => {
    try {
      const getUserList = async () => {
        const res = await api.get('/users');

        setUserList(res.data);
      };
      getUserList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const clickSearchFunc = useCallback(() => {
    console.log('success');
  }, []);

  return (
    <>
      <Header />
      <Search clickSearch={clickSearchFunc} />
      <List>
        {userList &&
          userList.map((user, index) => <UserList user={user} key={index} />)}
      </List>
    </>
  );
};

export default App;
