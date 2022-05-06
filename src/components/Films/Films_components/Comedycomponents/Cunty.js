import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { display } from '@mui/system';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '260px' ,display: 'inline-block'}}
      renderInput={(params) => <TextField {...params} label="Год" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '2022', year: 1994 },
  { label: '2021', year: 1972 },
  { label: '2020', year: 1974 },
  { label: '2019', year: 2008 },
  { label: '2018', year: 1957 },
  { label: "2017", year: 1993 },
  { label: '2016', year: 1994 },
  { label: '2015', year: 1994 },
  { label: '2014', year: 1994 },
  { label: '2013', year: 1994 },
  { label: '2012', year: 1994 },
  { label: '2011', year: 1994 },
  { label: '2010', year: 1994 },
  { label: '2009', year: 1994 },
  { label: '2008', year: 1994 },
  { label: '2007', year: 1994 },
  { label: '2006', year: 1994 },
  { label: '2005', year: 1994 },
  { label: '2004', year: 1994 },
];