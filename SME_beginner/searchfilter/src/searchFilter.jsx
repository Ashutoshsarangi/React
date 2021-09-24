import {useState} from 'react';

function SearchFilter(props){
    const [searchTerm, setSearchTerm] = useState('');
    const setSearchText =(val)=>{
        setSearchTerm(val);
        props.searchVal(val)
    }
    return(
        <>
            <input type="text" value={searchTerm} onChange={(e)=> setSearchText(e.target.value)} placeholder="Search..."/>
        </>
    );
}

export default SearchFilter;