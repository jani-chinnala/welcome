import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {value: true}

  buttonText = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  getButtonText = () => {
    const {value} = this.state
    return value ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const {buttonText} = this.getButtonText()
    return (
      <div className="Container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank You! Happy learning</p>
        <button className="check" type="button" onClick={this.buttonText}>
          {buttonText}
        </button>
        <h1>{buttonText}</h1>
      </div>
    )
  }
}

export default Welcome
