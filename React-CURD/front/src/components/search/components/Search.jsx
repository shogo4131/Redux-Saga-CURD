import React from 'react';
import { SearchContainer, InputLabel, Input, SearchButton } from './style';
import {
  BUTTON_ACTIVATION_COLOR,
  BUTTON_INACTIVE_COLOR,
} from '../../../constants/commonStyle';

const Search = React.memo(({ clickSearch, changeSearch, text }) => {
  return (
    <SearchContainer>
      <InputLabel htmlFor="searchInput">ユーザー名で検索</InputLabel>
      <Input
        type="text"
        id="searchInput"
        value={text}
        onChange={changeSearch}
      />
      <SearchButton
        onClick={clickSearch}
        disabled={!text}
        style={{
          backgroundColor: text
            ? BUTTON_ACTIVATION_COLOR
            : BUTTON_INACTIVE_COLOR,
        }}
      >
        検索
      </SearchButton>
    </SearchContainer>
  );
});

export default Search;
