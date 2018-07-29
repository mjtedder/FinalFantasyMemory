import React from "react";
import "./Header.css";
import Score from '../Score'

const Header = (props) => (
    <div id='header'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <p id='title'>Final Fantasy Memory Game</p>
        </div>
        <div className='col-md-4'>
          <p id='message'></p>
        </div>
        <div className='col-md-4'>
          <p id='scores'>{`Your Score: ${props.Score} Top Score: 0`}</p>
        </div>
      </div>
    </div>
  </div>
  );

export default Header;
