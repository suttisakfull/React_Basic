import React, {Component} from 'react';

class App extends Component {
  state = {
    team: 'Thailand'
  }

  componentWillMount(){
    console.log('Component Will Mount');
  }

  render() {
    console.log('Component Render')
    return (
      <div onClick={this.userClick}>
        Welcome to React Component
      </div>
    )
  }

  componentDidMount(){
    console.log('Component Did Mount.')
  }

  // shouldComponentUpdate() ตรวจว่าจะอนุญาตให้ update content ได้หรือไม่

  // จะถูกเรียกใช้งานก่อนที่คอมโพเนนต์จะ update ไปยัง DOM
  componentWillUpdate(){
    console.log('Component will update.')
  }

  // จะถูกเรียกใช้หลังคอมโพเนนต์ update ค่าใหม่ไปยัง DOM
  componentDidUpdate(){
    console.log('Component Did update.')
  }

  userClick = () => {
    this.setState({
      team : 'Malaysia'
    })
  }

}
export default App
