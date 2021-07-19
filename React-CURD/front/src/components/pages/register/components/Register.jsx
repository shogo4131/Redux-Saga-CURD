import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Action from '../modules/RegisterAction';

import { Header } from '../../../header/container/index';
import { Input } from '../../../input/container/index';
import {
  RegisterContainer,
  InputForms,
  InputLabel,
  RegisterButton,
} from './style';
import {
  BUTTON_ACTIVATION_COLOR,
  BUTTON_INACTIVE_COLOR,
} from '../../../../constants/commonStyle';

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
  const changeNameHandler = useCallback(
    (e) => {
      setInput({ ...input, name: e.target.value });
    },
    [input]
  );

  /* プロフィール入力欄の変更 */
  const changeProfileHandler = useCallback(
    (e) => {
      setInput({ ...input, profile: e.target.value });
    },
    [input]
  );

  /* 登録ボタン押下 */
  const clickRegisterFunc = useCallback(() => {
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
            <Input
              id={'name'}
              placeholder={'例) 山田太郎'}
              maxLength={10}
              value={input.name || ''}
              handleChange={changeNameHandler}
            />
          </InputForms>
          <InputForms>
            <InputLabel htmlFor="profile">プロフィール</InputLabel>
            <Input
              id={'profile'}
              placeholder={'例) 野球が好きです'}
              maxLength={30}
              value={input.profile || ''}
              handleChange={changeProfileHandler}
            />
          </InputForms>
          <div>
            <RegisterButton
              onClick={clickRegisterFunc}
              disabled={!input.name || !input.profile}
              style={{
                marginRight: 10,
                backgroundColor:
                  input.name && input.profile
                    ? BUTTON_ACTIVATION_COLOR
                    : BUTTON_INACTIVE_COLOR,
              }}
            >
              登録
            </RegisterButton>
            <RegisterButton
              onClick={clickUpdateFunk}
              disabled={!input.name || !input.profile}
              style={{
                backgroundColor:
                  input.name && input.profile
                    ? BUTTON_ACTIVATION_COLOR
                    : BUTTON_INACTIVE_COLOR,
              }}
            >
              更新
            </RegisterButton>
          </div>
        </div>
      </RegisterContainer>
      <Toaster />
    </>
  );
};

export default Register;
