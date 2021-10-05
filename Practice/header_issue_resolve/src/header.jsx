import {useHistory, useLocation, useParams} from 'react-router-dom';

const Header = ()=>{
    const history = useHistory();
    const params = useParams();
    const location = useLocation();
    console.log(history, params, location);
    return (
        <h1>Header Component</h1>
    );
}

export default Header;