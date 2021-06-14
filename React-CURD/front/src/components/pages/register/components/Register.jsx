import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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

  const [inputName, setInputName] = useState('');
  const [inputProfile, setInputProfile] = useState('');

  /* 名前入力欄の変更 */
  const changeNameHandler = useCallback((e) => {
    setInputName(e.target.value);
  }, []);

  /* プロフィール入力欄の変更 */
  const changeProfileHandler = useCallback((e) => {
    setInputProfile(e.target.value);
  }, []);

  /* 更新ボタン押下 */
  const clickUpdateFunc = async () => {
    try {
      const res = await api.post('/users', {
        name: inputName,
        profile: inputProfile,
      });
    } catch (error) {
      console.log(error);
    } finally {
      history.push('/');
    }
  };

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
            <RegisterButton onClick={clickUpdateFunc}>登録</RegisterButton>
          </div>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
