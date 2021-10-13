import React from 'react';
import ReactDom from 'react-dom';



class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <h1>Rotating Text Around The Earth</h1>
        <div className="earth">hi</div>
      </React.Fragment>
    );
  }
}

export default Home;