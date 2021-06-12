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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HeaderTitle>ユーザー管理</HeaderTitle>
      </Link>
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
