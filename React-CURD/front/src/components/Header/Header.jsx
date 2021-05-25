import styled from 'styled-components';

// Header Style
const UserHeader = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0000ff;
`;

const HeaderTitle = styled.h1`
  color: #ffffff;
  margin-left: 20px;
`;

const Header = () => {
  return (
    <UserHeader>
      <HeaderTitle>ユーザー管理</HeaderTitle>
    </UserHeader>
  );
};

export default Header;
