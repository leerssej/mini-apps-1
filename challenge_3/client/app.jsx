class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCheckingOut: false,
      isAccountInfoSubmitted: false,
      date: new Date(),
      name: '',
      email: '',
      password: '',
    }
    // click handling
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  } // closes constructor
  
  handleCheckoutClick() {
    this.setState({ isCheckingOut: true })
    console.log(this.state);
  }

  handleAccountClick() {
    this.setState({ isAccountInfoSubmitted: true })
    console.log(this.state);
  }

  handleConfirmClick() {
    this.setState({ isCheckingOut: false })
    this.setState({ isAccountInfoSubmitted: false })
    console.log(this.state);
  }

  render() {
    if (!this.state.isCheckingOut) {
      return (
        <div>
          <h2>React Store</h2>
          <span> 
            <input type="submit" className="checkout" value="Checkout" onClick={this.handleCheckoutClick}/>
          </span>
        </div>
      )
    } else if (!this.state.isAccountInfoSubmitted){
      return (
        <div>
          <h3>Checking Out</h3>
          <h4>Account Info</h4>
          <input type="submit" className="AccountSubmit" value="Next" onClick={this.handleAccountClick.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Please confirm your order information below.</h3>
          <h4></h4>
          <input type="submit" className="OrderSubmit" value="Confirm Order" onClick={this.handleConfirmClick.bind(this)} />
        </div>
      )
    }
  }
}
console.log("app was run")

ReactDOM.render(<App />, document.getElementById("app"));
