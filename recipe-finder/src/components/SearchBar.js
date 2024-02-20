import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({placeholder, onChange}) => {
  return (
    <div className="flex justify-center my-5 ">
      <TextField
        placeholder={placeholder}
        onChange={onChange}
        className="w-1/2"
        InputProps={{
            // startAdornment is the element to be placed at the start of the input field 
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
