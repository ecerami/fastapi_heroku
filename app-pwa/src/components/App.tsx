import React from 'react'
import CreateNote from './CreateNote'
import {Report} from './Report'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route path="/reporte">
              <Report />
             </Route>  
            <Route path="/">
              <CreateNote />         
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
