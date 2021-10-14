import React from 'react';
import reactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuillEditor from './Editor.jsx';
import Quotes from './Quote.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {memes: []};
  }

  componentDidMount() {
    axios.get('/quotes')
      .then(response => {
        this.setState({memes: response.data});
      })
      .catch(error => {
        console.log('Err from Cli:', error);
      })
  }

  render() {
    return (
      <div>
        <Quotes lists={this.state.memes}/>
        <QuillEditor />
      </div>
    );
  }
}

export default App;