import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Action from '../modules/HomeAction';

import { Header } from '../../../header/container/index';
import { Search } from '../../../search/container/index';
import { UserList } from '../../../userList/container/index';
import { List } from '../../../../app/style';

import api from '../../../../api/api';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchWord, setSearchWord] = useState('');
  const [isDelete, setIsDelete] = useState(false);

  const { userList, deleteMessage } = useSelector((state) => state.home);

  /* ユーザー情報を全て取得 */
  useEffect(() => {
    let isMounted = true;
    if (isMounted) dispatch(Action.getUser());

    return () => {
      setIsDelete(false);
      isMounted = false;
    };
  }, [isDelete, dispatch]);

  /* ユーザー情報を検索 */
  const clickSearchFunc = useCallback(async () => {
    if (!searchWord) return toast.error('ユーザー名が入力されていません');

    try {
      const res = await api.get(`/search/?name=${searchWord}`);

      // setUserList(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [searchWord]);

  /* ユーザー情報を編集 */
  const clickEditUserFunc = useCallback(
    (id) => {
      dispatch(Action.selectedUser(id));

      history.push({ pathname: '/register' });
    },
    [history, dispatch]
  );

  /* ユーザー情報を削除 */
  const clickDeleteUserFunc = useCallback(
    (id) => {
      dispatch(Action.deleteUser(id));
      setIsDelete(true);

      toast.success(deleteMessage.message);
    },
    [dispatch, deleteMessage]
  );

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
