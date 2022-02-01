import React from 'react';

/**
 *  The Login class creates to inputs for the user to enter their email and password. 
 * 
 *  After the user has entered their email and password the Log in button will return the handleLoginClick button.
 *  This button returns the handleLoginClick which validates whether the credentials are stored in the Database.
 * 
 * @author Matthew Flegg - w19001527
 */

class Login extends React.Component {

render() {
  return (
    <div>
       <input
         type='text' 
         placeholder='email'
         value={this.props.email}
         onChange={this.props.handleEmail}
       />
       <input
         type='password' 
         placeholder='password'
         value={this.props.password}
         onChange={this.props.handlePassword}
       />
      <button onClick={this.props.handleLoginClick}>Log in</button>
    </div>
  );
}
}

export default Login;