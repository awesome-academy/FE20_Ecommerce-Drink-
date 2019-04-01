import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            {routes.route.map((data, i) => (
              <Route key={i} path={data.path} exact={data.exact} component={data.component}></Route>
            ))}
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
