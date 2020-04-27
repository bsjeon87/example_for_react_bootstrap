import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import {InputComponent} from './components/Input'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <HashRouter basename="/">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/content" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </HashRouter>
        </Layout>
        <InputComponent />
      </React.Fragment>
    );
  }
}

export default App;
