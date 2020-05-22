import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

//lấy tất cả sản phẩm
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
//xóa
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(res.data));
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
//thêm
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
//lấy giá trị product(des)
export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'get', null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}
export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}