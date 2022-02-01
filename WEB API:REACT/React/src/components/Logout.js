import React from 'react';

/**
 *  This class returns a LogOut button when the Logout class is called after the user is logged in. 
 * 
 *  The logout button then allows the logged in user to log out. 
 * 
 * @author Matthew Flegg - w19001527
 */

class Logout extends React.Component {

render() {
  return (
    <div>
      <button onClick={this.props.handleLogoutClick}>Log Out</button>
    </div>
  );
}
}

export default Logout;