import React from "react";
import {InputBase} from '@mui/material'

const SearchBar = ({ searchItem, setSearchItem}) => {
    return(
        <InputBase 
        placeholder="Search book by title" 
        sx={{color:'black'}}
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)} />
    )
}

export default SearchBar;