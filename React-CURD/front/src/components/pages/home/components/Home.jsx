import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Action from '../modules/HomeAction';

import { Loading } from '../../../loading/container/index';
import { NotUsers } from '../../../notUsers/container/index';
import { Header } from '../../../header/container/index';
import { Search } from '../../../search/container/index';
import { UserList } from '../../../userList/container/index';
import { List } from '../../../../app/style';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchWord, setSearchWord] = useState('');

  const { loading, userList, error } = useSelector((state) => state.home);

  /* ユーザー情報を全て取得 */
  useEffect(() => {
    dispatch(Action.getUser());
  }, [dispatch]);

  /* ユーザー情報を検索 */
  const clickSearchFunc = useCallback(() => {
    if (!searchWord) return toast.error('ユーザー名が入力されていません');

    dispatch(Action.searchUser(searchWord));
  }, [dispatch, searchWord]);

  /* ユーザー情報を編集 */
  const clickEditUserFunc = useCallback(
    (id) => {
      dispatch(Action.selectedUser(id));

      history.push({ pathname: '/register' });
    },
    [dispatch, history]
  );

  /* ユーザー情報を削除 */
  const clickDeleteUserFunc = useCallback(
    (id) => {
      dispatch(Action.deleteUser(id));
    },
    [dispatch]
  );

  /* 検索入力欄の変更検知 */
  const changeSearchHandler = useCallback((e) => {
    setSearchWord(e.target.value);
  }, []);

  /* 通信処理失敗表示 */
  if (error) {
    return (
      <>
        <Header />
        <div>{error}</div>
      </>
    );
  }

  /* ローディング表示 */
  if (!loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  /* ユーザーが登録されていない場合を表示 */
  if (userList.length <= 0) {
    return (
      <>
        <Header />
        <NotUsers />
      </>
    );
  }

  return (
    <>
      <Header />
      <Search
        clickSearch={clickSearchFunc}
        changeSearch={changeSearchHandler}
        text={searchWord}
      />
      <List>
        {userList.map((user) => (
          <UserList
            user={user}
            clickEditUser={clickEditUserFunc}
            clickDeleteUser={clickDeleteUserFunc}
            key={user.id}
          />
        ))}
      </List>
      <Toaster />
    </>
  );
};

export default Home;
