import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userListSelector, fetchUsers } from '../modules/users';

class Users extends Component {
  static fetchData(store) {
    console.log('[SERVER LOAD]', store.dispatch(fetchUsers()));
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>
            <p>{user.username}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({ users: userListSelector(state) }),
  { fetchUsers },
)(Users);
