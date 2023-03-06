import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 // การกำหนดค่าเริ่มต้นให้ State
  state = {
    user: "azureadmin",
    password: "admin@123",
    address: {
        district: "Klongsan, ",
        province: "Bangkok"
    }
  };

  // เมื่อกำหนดค่าเริ่มต้นให้พร็อพเพอร์ตี้ state ไปแล้ว เราจะไม่สามารถแก้ไขค่าที่อยู่ใน state ได้โดยตรง
  // ต้องแก้ไขผ่านเมธอด setState() แทน
  btnClick = () => {
    this.setState({
        user:"sqladmin",
        password: "sql@123",
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 mx-auto mt-5">
            <div className="card ml-5 mr-5">
              <div className="card-header text-right">
                <button className="btn btn-primary btn-sm" 
                   onClick={this.btnClick}>Switch User</button>
              </div>
              <div className="card-body">
                user: <span className="ml-2">{this.state.user}</span> <br />
                password: <span className="ml-2">{this.state.password}</span> <br />
                address: <span className="ml-2">{this.state.address.district}</span>
                         <span className="ml-1">{this.state.address.province}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
