import React from 'react';
import reactDom from 'react-dom';
import QuillEditor from './Editor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>Hello!
      <QuillEditor />
      </div>
    );
  }
}

export default App;