import React from 'react';
import ProductReview from '../ProductContainer/ProductReview';
import ChooseProduct from '../ProductContainer/ChooseProduct';
import Customers from '../ProductContainer/Customers';

const Products = () => {
    return (
        <div className='px-2'>
            <ProductReview/>
            <ChooseProduct/>
            <Customers/>
        </div>
    );
};

export default Products;