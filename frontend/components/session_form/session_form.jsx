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
    this.props.processForm({user});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (<ul>
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    }
  }

  render() {
    debugger;
    return (
      <div className="login-form-container">
        <form>

          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-update"
                />
            </label>
            <br/>
            <button onClick={this.handleSubmit}>Submit</button>
            &nbsp;
            <button onClick={this.handleDemo}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(sessionForm);
