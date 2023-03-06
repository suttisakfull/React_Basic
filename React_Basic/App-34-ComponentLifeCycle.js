import React, {Component} from 'react';

class App extends Component {
    // 1 รับค่า default props
    // 2 กำหนดค่าเริ่มต้นให้กับ state
    state = {
        name: "Step 2 : Define State Value."
    };
    // 3 ก่อน render
    componentWillMount() {
        console.log("Step 3 : Before Render");
    }
    // 4 ขณะ render
    render() {
        console.log('Step 4 : Rendering', this.props);
        return (
            <div>
                {this.state.name}
            </div>
        ) 
    }
    // 5 หลังจาก render เสร็จแล้ว 
    componentDidMount() {
        console.log("Step 5 : After Render");
    }
}
export default App;
