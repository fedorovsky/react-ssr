import * as React from 'react';
import Card from 'components/Card';
import UserList from 'components/UserList';
import Counter from 'components/Counter';

const App = () => {
  return (
    <div>
      <Card />
      <UserList />
      <Counter />
    </div>
  );
};

export default App;
