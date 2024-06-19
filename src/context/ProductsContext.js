import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [sortCriteria, setSortCriteria] = useState('price');
    const [currentPage, setCurrentPage] = useState(1);

    const loadProducts = async(params) => {
        const data = await fetchProducts(params);
        setProducts(data);
    };

    useEffect(() => {
        // Load initial products when the component mounts
        loadProducts({ company: 'ANZ', category: 'Laptop', minPrice: 1, maxPrice: 10000 });
    }, []);

    return ( <
        ProductsContext.Provider value = {
            { products, filters, setFilters, sortCriteria, setSortCriteria, currentPage, setCurrentPage } } > { children } <
        /ProductsContext.Provider>
    );
};