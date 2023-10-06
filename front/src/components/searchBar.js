import React from 'react';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

const Search = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #f1f3f4;
  margin-left: 0;
  width: 100%;
`;

const SearchIconWrapper = styled.div`
  padding: 5px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
  padding: 10px 10px 10px 60px;
  transition: width 0.4s ease-in-out;
  width: 100%;
  &:focus {
    width: 100%;
  }
`;

const SearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Rechercher…"
        inputProps={{ 'aria-label': 'rechercher' }}
      />
    </Search>
  );
};

export default SearchBar;
