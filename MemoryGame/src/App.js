import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from './characters.json';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.character for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Characters List</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={friend.location}
            />
        ))}
    );
  }
}

export default App;
