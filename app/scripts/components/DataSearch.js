/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Button, styled} from "@material-ui/core";
import {Api} from "../api";

export default function ProductSearch() {

  const options = Api.getAllData()
    .map((option) => {
      const firstLetter = option.name[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
      };
    })
    .sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter));

  return (
    <SearchWrapper>
      <Autocomplete
        options={options}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Data Arama" variant="outlined"/>}
        style={{flexGrow: 1}}
      />
      <Button variant="contained" color="primary" style={{margin: '0 .5rem 0'}}>Ekle</Button>
    </SearchWrapper>
  );
}

const SearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'stretch'
})
