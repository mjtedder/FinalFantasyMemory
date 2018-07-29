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
