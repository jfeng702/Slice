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
    // console.log('next props received');
    if (nextProps.loggedIn) {
      console.log('Next Props contains logged in');
      this.props.history.push('/homepage');
    }
  }

  componentDidMount() {
    // var auto = document.getElementById('autofocus');
    document.forms[0].elements[0].focus();
    this.props.clearErrors();
    // console.log('component did mount');
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: 'guest',
      password: 'password'
    };
    this.props.login({user});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    // this.props.history.push('/homepage');
  }


  navLink() {
    if (this.props.location.pathname === '/login') {
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
    // console.log(this.props.formType);
    // console.error(this.props.location);
    const formType = this.props.location.pathname.slice(1);

    return (
      <div className="login-form-container">
        <form className="logn-form">
          Please {formType} or {this.navLink()}
          {this.renderErrors()}
          <br/>
          <br/>
          <div className="login-form">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-username"
              placeholder="Username"
              />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-password"
              placeholder="Password"
              />
            <br/>
            <button className="submit-btn" onClick={this.handleSubmit}>Submit</button>
            &nbsp;
            <button className="demo-btn" onClick={this.handleDemo}>Demo Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(sessionForm);
