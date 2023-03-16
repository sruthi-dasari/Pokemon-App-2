import "./index.css";

import { SiPokemon } from "react-icons/si";
import PokemonCard from "../PokemonCard";

import { Component } from "react";

class Home extends Component {
  state = {
    pokemonData: [],
  };

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    // console.log(response);
    const data = await response.json();
    // console.log(data);

    if (response.ok) {
      this.setState({ pokemonData: data });
    }
  };

  render() {
    const { pokemonData } = this.state;
    // console.log(pokemonData);
    return (
      <div className="home-container">
        <SiPokemon className="pokemon-heading-icon" />
        <h1 className="main-heading">Click the cards to see details</h1>
        <div className="pokemon-cards-container">
          {pokemonData.results?.map((eachItem, i) => (
            <PokemonCard itemDetail={eachItem} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
