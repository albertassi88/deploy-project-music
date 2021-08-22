import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Artistas from './pages/Artistas';
import Albuns from './pages/Albuns';
import Videos from './pages/Videos';
import TodoProvider from './context/TodoProvider';

function App() {
  return (    
      <HashRouter>
        <Switch>
          <TodoProvider>
            <Route exact path="/" component={ Home }/>
            <Route path="/artistas" component={ Artistas } />
            <Route path="/albuns" component={ Albuns } />
            <Route path="/videos" component={ Videos } />
          </TodoProvider>
        </Switch>
      </HashRouter>    
  );
}

export default App;
