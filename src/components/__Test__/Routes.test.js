import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';
import Home from '../Home';
import App from '../App';
import Quotes from '../Quotes';

test('return content from Routes matches snapshot', () => {
  const component = render(
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={App} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </>
    </BrowserRouter>,
  );
  expect(component.container).toMatchSnapshot();
});

test('content will render without crash', () => {
  const div = document.createElement('div');
  render(
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={App} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </>
    </BrowserRouter>, div,
  );
});
