import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../../../header/container/index';
import { Search } from '../../../search/container/index';
import { UserList } from '../../../userList/container/index';
import { List } from '../../../../app/style';
import api from '../../../../api/api';

const Home = () => {
  const [userList, setUserList] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  /* ユーザー情報を全て取得 */
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

  /* ユーザー情報を検索 */
  const clickSearchFunc = useCallback(async () => {
    try {
      const res = await api.get(`/search/?name=${searchWord}`);

      setUserList(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [searchWord]);

  /* 検索入力欄の変更 */
  const changeSearchHandler = useCallback((e) => {
    setSearchWord(e.target.value);
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

export default Home;
