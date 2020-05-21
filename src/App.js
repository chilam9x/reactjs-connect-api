import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar">
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

      <div className="container">
          
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>
              
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                  </div>
                  <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Mã</th>
                          <th>Tên</th>
                          <th>Giá</th>
                          <th>Trạng thái</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>Iphone 6</td>
                          <td>500000</td>
                          <td>
                          <span className="label label-warning">Còn hàng</span>
                          </td>
                     
                          <td>
                          <button type="button" className="btn btn-success mr-10">Sửa</button>
                          
                          <button type="button" className="btn btn-danger">Xóa</button>
                          
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    
                  </div>
              </div>
              
            </div>
          </div>
          
      </div>

    </div>
  );
}

export default App;
