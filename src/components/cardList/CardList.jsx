import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="card-list">
        {pokemons.map((pokemon, index) => (
          <div className="card-container" key={pokemon.name}>
            {console.log(pokemon)}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                index + 1
              }.png`}
              alt="pokemon"
            />
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}
