import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserHeader,
  HeaderTitle,
  Navigation,
  NavigationList,
  NavigationItem,
} from './style';

const Header = React.memo(() => {
  return (
    <UserHeader>
      <HeaderTitle>ユーザー管理</HeaderTitle>
      <Navigation>
        <NavigationList>
          <Link to="/">
            <NavigationItem>ホーム</NavigationItem>
          </Link>
          <Link to="/register">
            <NavigationItem>登録</NavigationItem>
          </Link>
        </NavigationList>
      </Navigation>
    </UserHeader>
  );
});

export default Header;
