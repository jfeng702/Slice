import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class sessionForm extends React.Component {

  constructor(props) {
    // console.log(props);
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

// what does this do?
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    // var auto = document.getElementById('autofocus');
    document.forms[0].elements[0].focus();
    this.props.clearErrors();
    console.log('newmount');
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: 'username',
      password: 'password'
    };
    this.props.login({user});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.props.history.push({
      pathname: '/homepage'
    });
  }


  navLink() {
    if (this.props.formType === 'login') {
      return <Link onClick={() => this.props.clearErrors()} to="/signup">sign up instead</Link>;
    } else {
      return <Link onClick={() => this.props.clearErrors()} to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className='error-display'>
          {this.props.errors.map((error,i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  clearErrors() {
    this.setState({
      errors: null
    });
  }

  render() {
    // debugger;
    debugger;
    return (
      <div className="login-form-container">
        <form className="logn-form">
          Please {this.props.formType}&nbsp;
          or {this.navLink()}
          {this.renderErrors()}
          <br/>
          <br/>
          <div className="login-form">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
              />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-update"
              placeholder="Password"
              />
            <br/>


            <button className="submit-btn" onClick={this.handleSubmit}>Submit</button>
            &nbsp;
            <button onClick={this.handleDemo}>Demo Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(sessionForm);
