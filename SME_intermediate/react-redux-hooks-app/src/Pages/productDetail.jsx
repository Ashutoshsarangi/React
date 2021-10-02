import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ProductDetail = (props)=>{
    console.log('Product Detail', props.match);
    const product = props.history.location.singleObj;


    useEffect(()=>{

    },[]);
    return(
        <div>
            <h3>Name: <span>{product.title}</span></h3>
            <h3>Price: <span>{product.price}</span></h3>
            <h3>Category: <span>{product.category}</span></h3>
            <img style={{height: '60px', width: '60px'}}src={product.image} alt={product.description}/>
        </div>
    );
}

export default ProductDetail;