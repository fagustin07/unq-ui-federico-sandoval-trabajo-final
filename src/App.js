import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerVSPlayer from './components/PlayerVSPlayer';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path = '/onevsone' component={PlayerVSPlayer}/>
            <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
