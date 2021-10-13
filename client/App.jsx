import React from 'react';
import reactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuillEditor from './Editor.jsx';
import Home from './Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/outerSpace">Outer Space</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/outerSpace">
              <QuillEditor />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;