import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core';

const Filter = () => {
    const { filters, setFilters } = useContext(ProductsContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleClearFilters = () => {
        setFilters({});
    };

    return ( <
        div className = "filter" >
        <
        TextField name = "category"
        label = "Category"
        value = { filters.category || '' }
        onChange = { handleInputChange }
        /> <
        TextField name = "company"
        label = "Company"
        value = { filters.company || '' }
        onChange = { handleInputChange }
        /> <
        TextField name = "rating"
        label = "Rating"
        value = { filters.rating || '' }
        onChange = { handleInputChange }
        /> <
        TextField name = "priceMin"
        label = "Min Price"
        value = { filters.priceMin || '' }
        onChange = { handleInputChange }
        /> <
        TextField name = "priceMax"
        label = "Max Price"
        value = { filters.priceMax || '' }
        onChange = { handleInputChange }
        /> <
        FormControl >
        <
        InputLabel > Availability < /InputLabel> <
        Select name = "availability"
        value = { filters.availability || '' }
        onChange = { handleInputChange } >
        <
        MenuItem value = "" > All < /MenuItem> <
        MenuItem value = "yes" > In Stock < /MenuItem> <
        MenuItem value = "out-of-stock" > Out of Stock < /MenuItem> <
        /Select> <
        /FormControl> <
        Button onClick = { handleClearFilters } > Clear Filters < /Button> <
        /div>
    );
};

export default Filter;