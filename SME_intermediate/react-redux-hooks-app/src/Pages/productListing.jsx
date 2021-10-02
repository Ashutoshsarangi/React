import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { logDOM } from '@testing-library/dom';
import logo from '../logo.svg'
import './productList.css';

const ProductListing = ()=>{

    const result = useSelector((state)=> state.allProduct.allProducts)
    const dispatch = useDispatch();

    useEffect(async()=>{
        const resp = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log('Err', err)
        });
        dispatch({type:'AddProducts', payload:resp.data});
    }, []);
    return (
        <div>
            {
                result.length === 0 ? (<>
                <img src={logo} className="App-logo"/>
                </>):
                (result.map((item)=>{
                    return(
                        <div key={item.id}>
                        <Link to={{pathname: `/product/${item.id}`, singleObj: item}}>
                            <h3>Name: <span>{item.title}</span></h3>
                            <h3>Price: <span>{item.price}</span></h3>
                            <h3>Category: <span>{item.category}</span></h3>
                            <img style={{height: '60px', width: '60px'}}src={item.image} alt={item.description}/>
                        </Link>
                        </div>
                    );
                }))
            }
        </div>
        
    );
}

export default ProductListing;