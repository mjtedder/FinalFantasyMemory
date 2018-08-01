import React from 'react'
import './CharacterCard.css'

const CharacterCard = props => {

    return (
      <div className='card' data-clicked= {props.clicked} onClick = {() => props.handleClick(props.id)}>
        <div className='img-container'>
          <img src = {props.image} alt = {props.name} />
        </div>
      </div>)

    }

export default CharacterCard
