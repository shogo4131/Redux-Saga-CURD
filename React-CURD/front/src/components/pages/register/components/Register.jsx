import React from 'react';
import { Header } from '../../../header/container/index';
import {
  RegisterContainer,
  InputForms,
  InputLabel,
  RegisterButton,
} from './style';

const Register = () => {
  return (
    <>
      <Header />
      <RegisterContainer>
        <div>
          <h1>登録画面</h1>
        </div>
        <div>
          <form action="">
            <InputForms>
              <InputLabel htmlFor="">名前</InputLabel>
              <input type="text" placeholder="例) 山田太郎" maxLength="10" />
            </InputForms>
            <InputForms>
              <InputLabel htmlFor="">プロフィール</InputLabel>
              <input
                type="text"
                placeholder="例) 野球が好きです"
                maxLength="30"
              />
            </InputForms>
            <div>
              <RegisterButton>登録</RegisterButton>
            </div>
          </form>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
