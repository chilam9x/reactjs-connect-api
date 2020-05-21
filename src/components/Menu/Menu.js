import React, { Component } from "react";

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a href="/" className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/">Quản lý sản phẩm</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
