import styled from 'styled-components';

// Search Style
const SearchContainer = styled.div`
  margin: 20px;
`;

const InputLabel = styled.label`
  margin-right: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 5px;
  border: solid 3px #7fcfe2;
`;

// Search Button Style
const SearchButton = styled.button`
  background: #3e64ff;
  border-color: #3e64ff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  border: solid 3px #3e64ff;
`;

const Search = ({ clickSearch }) => {
  return (
    <SearchContainer>
      <InputLabel htmlFor="searchInput">ユーザー名で検索</InputLabel>
      <Input type="text" id="searchInput" />
      <SearchButton onClick={clickSearch}>検索</SearchButton>
    </SearchContainer>
  );
};

export default Search;
