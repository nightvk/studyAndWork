import React, { Component } from 'react'
import Buttons from './commponent/Button_ref'

class App extends Component {
  render() {
    return (
      <div>
        <Buttons text='按钮' pattern='warning' event={this.alert}/>
      </div>
    );
  }
  alert(x){
    alert(x)
  }
}

export default App;
