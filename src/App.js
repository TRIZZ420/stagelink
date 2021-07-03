import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  );
}

export default App;