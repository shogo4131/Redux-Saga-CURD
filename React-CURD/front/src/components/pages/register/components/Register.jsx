import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Action from '../modules/RegisterAction';

import { Header } from '../../../header/container/index';
import {
  RegisterContainer,
  InputForms,
  InputLabel,
  RegisterButton,
} from './style';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { selectedUser } = useSelector((state) => state.home);

  const [input, setInput] = useState({
    name: '',
    profile: '',
  });

  /* 編集ボタン押下時、値をセット */
  useEffect(() => {
    if (selectedUser) {
      setInput({ name: selectedUser.name });
      setInput({ profile: selectedUser.profile });
    }
  }, [selectedUser]);

  /* 名前入力欄の変更 */
  const changeNameHandler = (e) => {
    setInput({ ...input, name: e.target.value });
  };

  /* プロフィール入力欄の変更 */
  const changeProfileHandler = (e) => {
    setInput({ ...input, profile: e.target.value });
  };

  /* 登録ボタン押下 */
  const clickRegisterFunc = useCallback(() => {
    if (!input.name || !input.profile)
      return toast.error('名前またはプロフィールが入力されていません');

    dispatch(
      Action.postUser({
        name: input.name,
        profile: input.profile,
        history,
        toast,
      })
    );
  }, [dispatch, history, input]);

  /* 更新ボタン押下 */
  const clickUpdateFunk = useCallback(() => {
    if (!input.name || !input.profile)
      return toast.error('名前またはプロフィールが入力されていません');

    dispatch(
      Action.updateUser({
        id: selectedUser.id,
        name: input.name,
        profile: input.profile,
        history,
        toast,
      })
    );
  }, [dispatch, history, input]);

  return (
    <>
      <Header />
      <RegisterContainer>
        <div>
          <h1>登録画面</h1>
        </div>
        <div>
          <InputForms>
            <InputLabel htmlFor="name">名前</InputLabel>
            <input
              id="name"
              type="text"
              placeholder="例) 山田太郎"
              maxLength="10"
              value={input.name || ''}
              onChange={changeNameHandler}
            />
          </InputForms>
          <InputForms>
            <InputLabel htmlFor="profile">プロフィール</InputLabel>
            <input
              id="profile"
              type="text"
              placeholder="例) 野球が好きです"
              maxLength="30"
              value={input.profile || ''}
              onChange={changeProfileHandler}
            />
          </InputForms>
          <div>
            <RegisterButton
              onClick={clickRegisterFunc}
              style={{ marginRight: 10 }}
            >
              登録
            </RegisterButton>
            <RegisterButton onClick={clickUpdateFunk}>更新</RegisterButton>
          </div>
        </div>
      </RegisterContainer>
      <Toaster />
    </>
  );
};

export default Register;
