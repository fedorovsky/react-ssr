import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userListSelector, fetchUsers } from '../modules/users';

class Users extends Component {
  /**
   * Статический метод, который вызывается на сервере
   * и записывает данные в стор
   */
  static fetchData(store) {
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