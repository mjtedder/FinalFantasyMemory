import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from './characters.json';
import Score from './components/Score'
import "./App.css";

const score = []

class App extends Component {
  // Setting this.state.friends to the characters json array
  state = {
    characters
  };

  // TODO: Click handler for cards, score props
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
            id={character.id}
            image={character.image}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;
