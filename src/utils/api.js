const mockProductsData = [{
        "productName": "Laptop 1",
        "price": 2236,
        "rating": 4.7,
        "discount": 63,
        "availability": "yes"
    },
    {
        "productName": "Laptop 13",
        "price": 1244,
        "rating": 4.5,
        "discount": 45,
        "availability": "out-of-stock"
    },
    // Add more mock data as needed
];

export const fetchProducts = async({ company, category, minPrice, maxPrice }) => {
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mocked response
    return mockProductsData;
};