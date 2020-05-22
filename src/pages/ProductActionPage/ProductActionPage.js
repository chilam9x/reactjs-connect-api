import React, { Component } from "react";
import apiCaller from './../../utils/apiCaller';
import { Link } from "react-router-dom";
import callApi from "./../../utils/apiCaller";
import { connect } from 'react-redux';
import { actAddProductRequest } from './../../actions/index';

class ProductActionPage extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    //sau khi click vao button edit

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'get', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus === '' ? false : true
        }
        if (id) {//update
            apiCaller(`products/${id}`, 'put', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
                //   history.push('/');
            });
        } else {//add
            this.props.onAddProduct(product);
            history.goBack();
        }

    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label><input checked={chkbStatus} type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} />Còn hàng</label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>

            </div>

        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },

    }
}
export default connect(null, mapDispatchToProps)(ProductActionPage);
