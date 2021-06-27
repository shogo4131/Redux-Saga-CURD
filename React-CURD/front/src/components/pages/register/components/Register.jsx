import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '../../../header/container/index';
import {
  RegisterContainer,
  InputForms,
  InputLabel,
  RegisterButton,
} from './style';
import api from '../../../../api/api';

const Register = () => {
  const history = useHistory();
  const { selectedUser } = useLocation();

  const [inputName, setInputName] = useState('');
  const [inputProfile, setInputProfile] = useState('');

  /* パラメーターセット */
  useEffect(() => {
    if (selectedUser) {
      setInputName(selectedUser.id.name);
      setInputProfile(selectedUser.id.profile);
    }
  }, [selectedUser]);

  /* 名前入力欄の変更 */
  const changeNameHandler = useCallback((e) => {
    setInputName(e.target.value);
  }, []);

  /* プロフィール入力欄の変更 */
  const changeProfileHandler = useCallback((e) => {
    setInputProfile(e.target.value);
  }, []);

  /* 登録ボタン押下 */
  const clickRegisterFunc = useCallback(async () => {
    try {
      const res = await api.post('/users', {
        name: inputName,
        profile: inputProfile,
      });

      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      history.push('/');
    }
  }, [history, inputName, inputProfile]);

  /* 更新ボタン押下 */
  const clickUpdateFunk = useCallback(async () => {
    try {
      const res = await api.put(`/users/${selectedUser.id.id}`, {
        name: inputName,
        profile: inputProfile,
      });

      toast.success(res.data.message);
    } catch (e) {
      console.log(e);
    } finally {
      history.push('/');
    }
  }, [history, inputName, inputProfile]);

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
              value={inputName}
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
              value={inputProfile}
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
