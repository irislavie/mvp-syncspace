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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="icon-container">
              <Link to="/">
                <FontAwesomeIcon  icon={faGlobeAmericas} size="3x" className="icon-home"></FontAwesomeIcon>
              </Link>
              <Link to="/SyncSpace">
                <FontAwesomeIcon icon={faRocket} size="3x"></FontAwesomeIcon>
              </Link>
            </ul>
          </nav>
          <Switch>
            <Route path="/SyncSpace">
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