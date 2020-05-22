var initialState = [
    {
        id: 1,
        name: 'iphone 6',
        price: 400,
        status: true
    },
    {
        id: 2,
        name: 'iphone 6+',
        price: 4040,
        status: false
    },
    {
        id: 3,
        name: 'iphone 7',
        price: 4300,
        status: false
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}
export default products;