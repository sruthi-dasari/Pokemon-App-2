import "./index.css";

import { Component } from "react";

class PokemonCard extends Component {
  render() {
    // const { cardDetails } = this.props;
    // const { name, url } = cardDetails;
    return (
      <div className="pokemon-card-container">
        {/* <img src={url} alt="pokemon img" /> */}
        {/* <h1>{name}</h1> */}
        <p>#1</p>
      </div>
    );
  }
}

export default PokemonCard;
