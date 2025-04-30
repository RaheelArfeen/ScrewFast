import React, { useEffect } from 'react';
import ProductReview from '../ProductContainer/ProductReview';
import ChooseProduct from '../ProductContainer/ChooseProduct';
import Customers from '../ProductContainer/Customers';

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      })
    return (
        <div className='px-2'>
            <ProductReview/>
            <ChooseProduct/>
            <Customers/>
        </div>
    );
};

export default Products;