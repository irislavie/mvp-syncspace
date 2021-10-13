import React from 'react';
import reactDom from 'react-dom';
import QuillEditor from './Editor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div><QuillEditor /></div>
      </div>
    );
  }
}

export default App;