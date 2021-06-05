import React from 'react';
import { SearchContainer, InputLabel, Input, SearchButton } from './style';

const Search = React.memo(({ clickSearch }) => {
  return (
    <SearchContainer>
      <InputLabel htmlFor="searchInput">ユーザー名で検索</InputLabel>
      <Input type="text" id="searchInput" />
      <SearchButton onClick={clickSearch}>検索</SearchButton>
    </SearchContainer>
  );
});

export default Search;
