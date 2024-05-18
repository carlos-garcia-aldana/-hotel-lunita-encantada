import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/booking" component={BookingPage} />
      </Switch>
    </Router>
  );
}

export default App;
