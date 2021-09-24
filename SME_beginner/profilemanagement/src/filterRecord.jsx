import {useRef, useState} from 'react';

function FilterRecord(props){

    const mySearchRef= useRef();
    const [searchTerm, setSearchTerm]= useState('');

    const handleInput = (val)=>{
        setSearchTerm(val)
        props.handleSearchFilter(val)
    }

    return(
        <input type="text" value={searchTerm} 
        onChange={(e)=> handleInput(e.target.value)}
        placeholder="search" 
        className="filter"/>
    );
}

export default FilterRecord;