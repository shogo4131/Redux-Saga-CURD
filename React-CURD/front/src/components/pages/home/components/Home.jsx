import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '../../../header/container/index';
import { Search } from '../../../search/container/index';
import { UserList } from '../../../userList/container/index';
import { List } from '../../../../app/style';
import api from '../../../../api/api';

const Home = () => {
  const history = useHistory();

  const [userList, setUserList] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [isDelete, setIsDelete] = useState(false);

  /* ユーザー情報を全て取得 */
  useEffect(() => {
    try {
      let isMounted = true;
      const getUserList = async () => {
        const res = await api.get('/users');

        if (isMounted) setUserList(res.data);
      };

      /* ユーザーリストAPI実行 */
      getUserList();

      return () => {
        isMounted = false;
        setIsDelete(false);
      };
    } catch (e) {
      console.log(e);
    }
  }, [isDelete]);

  /* ユーザー情報を検索 */
  const clickSearchFunc = useCallback(async () => {
    if (!searchWord) return toast.error('ユーザー名が入力されていません');

    try {
      const res = await api.get(`/search/?name=${searchWord}`);

      setUserList(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [searchWord]);

  /* ユーザー情報を編集 */
  const clickEditUserFunc = useCallback(
    async (id) => {
      try {
        const res = await api.get(`/users/${id}`);

        history.push({ pathname: '/register', selectedUser: { id: res.data } });
      } catch (e) {
        console.log(e);
      }
    },
    [history]
  );

  /* ユーザー情報を削除 */
  const clickDeleteUserFunc = useCallback(async (id) => {
    try {
      const res = await api.delete(`users/${id}`);

      setIsDelete(true);
      toast.success(res.data.message);
    } catch (e) {
      console.log(e);
    }
  }, []);

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
          userList.map((user, index) => (
            <UserList
              user={user}
              clickEditUser={clickEditUserFunc}
              clickDeleteUser={clickDeleteUserFunc}
              key={index}
            />
          ))}
      </List>
      <Toaster />
    </>
  );
};

export default Home;
