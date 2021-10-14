import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <div className="form-container">
          <form className="form">
            <p className="form-user">
              Username:
              <br />
              <input type="text" name="userName" className="form-input-user"/>
            </p>
            <br />
            <p className="form-password">
              Password:
              <br />
              <input type="text" name="passWord" className="form-input"/>
            </p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;