import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BillPage from './screens/billPage';
import Homepage from './screens/homePage'
import Items from './screens/items'

function App() {
  document.body.style = 'background: #A194D8' ;

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/items" exact component={Items} />
        <Route path="/bill" exact component={BillPage} />
      </Switch>
    </Router>
  );
}

export default App;
