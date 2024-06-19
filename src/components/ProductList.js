import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { products } = useContext(ProductsContext);

    return ( <
        div className = "product-list" > {
            products.map((product, index) => ( <
                ProductCard key = { index }
                product = { product }
                />
            ))
        } <
        /div>
    );
};

export default ProductList;