import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { counterValue: 0 }
  //   this.inc = this.inc.bind(this)
  // }
  state = { counterValue: 0 }

  // inc() {
  //   this.state.counterValue++
  // }

  inc = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }

  dec = () => {
    this.setState({ counterValue: this.state.counterValue - 1 })
  }

  // dec = () => {
  //   this.setState( (state) => {
  //     return { counterValue: state.counterValue -1 }
  //   })
  // }
  // dec = () => {
  //   const { counterValue } = this.state
  //   this.setState({ counterValue: counterValue -1 })
  // }

  render() {
    return (
      <>
        <h1>Counter Example</h1>
        <p>
          {this.state.counterValue}
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    )
  }
}

export default App;