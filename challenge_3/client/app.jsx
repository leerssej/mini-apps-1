class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCheckingOut: false,
      isAccountInfoSubmitted: false,
      visitTimeStamp: new Date(),
      username: '',
      email: '',
      password: '',
    }
  } // closes constructor
  
  handleCheckoutClick() {
    this.setState({ isCheckingOut: true });
    console.log(this.state);
  }

  handleAccountSubmit() {
    this.setState({ isAccountInfoSubmitted: true });
    console.log(this.state);
  }

  handleConfirmClick() {
    this.setState({ isCheckingOut: false });
    this.setState({ isAccountInfoSubmitted: false });
    console.log(this.state);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (!this.state.isCheckingOut) {
      return (
        <div>
          <h2>React Store</h2>
          <span>
            <input type='submit' className='checkout' value='Checkout' onClick={this.handleCheckoutClick.bind(this)}/>
          </span>
        </div>
      )
    } else if (!this.state.isAccountInfoSubmitted) {
      return (
        <div>
          <h3><em>Checking Out</em></h3>
          <h4>Account Info</h4>
          <div>
            <label>Username:</label><br></br>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
          <div>
            <label>email:</label><br></br>
            <input type='text' value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
          </div>
          <div>
            <label>password:</label><br></br>
            <input type='password' value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
            <input type='submit' className='AccountSubmit' value='Next' onClick={this.handleAccountSubmit.bind(this)}/>
          </div>
        </div>
      )
    } 
    return (
      <div>
        <h3><em>Checking Out</em></h3>
        <h4>Please confirm your order information below.</h4>
        <input type='submit' className='OrderSubmit' value='Confirm Order' onClick={this.handleConfirmClick.bind(this)} />
      </div>
    )
  }
}
console.log('app was run')

ReactDOM.render(<App />, document.getElementById('app'));
