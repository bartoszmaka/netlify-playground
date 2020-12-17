import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';

function App() {
  return (
    <Router>
      <div className="App">
        <ShowPath/>
        <Switch>
          <Route path="/A">
            <A />
          </Route>
          <Route path="/B">
            <B />
          </Route>
          <Route path="/C">
            <C />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function ShowPath() {
  const location = useLocation()
  return (
    <div>
      <pre>
        {JSON.stringify(location, null, 2)}
      </pre>
    </div>
  )
}
