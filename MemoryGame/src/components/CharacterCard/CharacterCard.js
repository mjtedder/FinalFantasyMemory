import React from 'react'
import './CharacterCard.css'

const CharacterCard = props => {

    this.handleClick = event => {
      console.log(event.target.alt)
    }

    return (
      <div className='card' data-clicked= {props.clicked} onClick = {this.handleClick}>
        <div className='img-container'>
          <img src = {props.image} alt = {props.name} />
        </div>
      </div>)

    }

export default CharacterCard
