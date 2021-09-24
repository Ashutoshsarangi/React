import {useRef} from 'react';

function FilterRecord(props){

    const mySearchRef= useRef();

    const handleInput = (e)=>{
        console.log(e)
        props.handleSearchFilter(e.target.value)
    }

    return(
        <input type="text" value={props.userSearch} 
        ref={mySearchRef}
        onChange={(e)=> handleInput(e)}
        placeholder="search" 
        className="filter"/>
    );
}

export default FilterRecord;