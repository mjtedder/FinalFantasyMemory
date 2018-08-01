import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from './characters.json';
import Score from './components/Score'
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the characters json array
  state = {
    characters: characters,
    score: 0,
    topScore: 0
  };

  // TODO: Click handler for cards, score props

  handleClick = (inputCard) => {

      this.state.characters.forEach(currentCard => {
        console.log( currentCard.clicked )
        if(inputCard === currentCard.id) {
          if(currentCard.clicked === true) {
            this.handleIncorrectGuess()
          } else {
              currentCard.clicked = true;
              this.handleCorrectGuess()
          }
        }
      })
    }

  handleCorrectGuess = () => {
    this.state.characters.forEach((card) => {
      card.clicked = false
    })
    // pass in score component to increment score
    this.shuffleCards()
  }

  handleIncorrectGuess = () => {
    characters.forEach((id, clicked) => {
      console.log('works')
      //resets data
    })
  }

  shuffleCards = () => {
    let shuffledCards = new Array(characters.length)
    characters.forEach((id, image, arr) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * shuffledCards.length)
      } while (shuffledCards[randomIndex])
        shuffledCards.splice(randomIndex, 1, id)
    })
    this.setState({characters: shuffledCards})
  }

  componentDidMount() {
    this.shuffleCards()
  }

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Header />
          {this.state.characters.map(character => (
          <CharacterCard
            handleClick={this.handleClick}
            key={character.id}
            id={character.id}
            clicked={character.clicked}
            image={character.image}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;
