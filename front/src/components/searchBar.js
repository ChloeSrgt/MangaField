import React from 'react'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: '#f1f3f4',
    margin: '0',
    width: '100%',
  },
  searchIconWrapper: {
    padding: '5px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    padding: '10px 10px 10px 60px',
    transition: 'width 0.4s ease-in-out',
    width: '100%',
    '&:focus': {
      width: '100%',
    },
  }
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIconWrapper}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Rechercher…"
        classes={{
          root: classes.inputRoot,
        }}
        inputProps={{ 'aria-label': 'rechercher' }}
      />
    </div>
  );
};

export default SearchBar;
