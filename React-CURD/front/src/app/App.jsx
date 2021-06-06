import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../components/header/container/index';
import { Search } from '../components/search/container/index';
import { UserList } from '../components/userList/container/index';
import { List } from './style';
import api from '../api/api';

const App = () => {
  const [userList, setUserList] = useState(null);
  const [searchWord, setSearchWord] = useState('');

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

  // User Search API Call
  const clickSearchFunc = useCallback(async () => {
    try {
      const res = await api.get(`/search/?name=${searchWord}`);

      setUserList(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [searchWord]);

  // Change SearchWord State
  const changeSearchHandler = useCallback((e) => {
    setSearchWord(() => e.target.value);
  }, []);

  return (
    <>
      <Header />
      <Search
        clickSearch={clickSearchFunc}
        changeSearch={changeSearchHandler}
        text={searchWord}
      />
      <List>
        {userList &&
          userList.map((user, index) => <UserList user={user} key={index} />)}
      </List>
    </>
  );
};

export default App;
