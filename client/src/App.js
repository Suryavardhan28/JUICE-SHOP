import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './screens/homePage'
import Items from './screens/items'

function App() {
  document.body.style = 'background: #A194D8' ;

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/items" exact component={Items} />
      </Switch>
    </Router>
  );
}

export default App;
