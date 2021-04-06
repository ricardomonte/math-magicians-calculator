import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import Quotes from './components/Quotes';

function Routes() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={App} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Routes;
