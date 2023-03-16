import "./index.css";

import { Component } from "react";

import PokemonCardDetail from "../PokemonCardDetail";

class PokemonCard extends Component {
  //   componentDidMount() {
  // this.gotoPokemonCardDetail();
  //   }

  //   onClickCard = () => {
  //     console.log("In onClickCard()");
  //     this.renderPokemonCardDetail();
  //   };

  //   renderPokemonCardDetail = () => {
  //     console.log("In renderPokemonCardDetail()");
  //     const { itemDetail } = this.props;
  //     const { url } = itemDetail;
  //     return <PokemonCardDetail url={url} />;
  //   };

  render() {
    // const { itemDetail } = this.props;
    // const { name } = itemDetail;
    // console.log(itemDetail);

    return (
      //   <button type="button" onClick={this.onClickCard}>
      //     <div className="pokemon-card-container">
      //       <h1 className="pokemon-name">{name}</h1>
      //     </div>
      //   </button>
      <div className="pokemon-card-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
          alt="pokemon"
        />
        <div className="name-and-id-container">
          <h1 className="pokemon-name">bulbasaur</h1>
          <p>#1</p>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
