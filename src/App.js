import { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/CardList";
import SearchField from "./components/SearchField/SearchField";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
      response.json().then((pokemon) =>
        this.setState(
          () => {
            return { pokemons: pokemon.results };
          },
          () => {
            console.log(this.state.pokemons);
          }
        )
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    const { pokemons, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.includes(searchField);
    });
    return (
      <>
        <div className="App">
          <SearchField onSearchChange={onSearchChange} />
          <CardList pokemons={filteredPokemon} />
        </div>
      </>
    );
  }
}

export default App;
