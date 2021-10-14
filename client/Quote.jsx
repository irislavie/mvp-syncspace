import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

var Quotes = (props) => {
  console.log(props.lists);
  if (props.lists === null) {
    return null;
  }
  return(
    <div className="sub">
      <div className="quotes">
        <FontAwesomeIcon icon={faQuoteLeft} className="leftIcon"/>
        {props.lists.quote}
        <FontAwesomeIcon icon={faQuoteRight} className="rightIcon"/>
        {'——'}
      </div>
      <div className="author">
        {props.lists.author}
      </div>
    </div>
  );
}

export default Quotes;