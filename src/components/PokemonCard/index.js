import "./index.css";

import { Component } from "react";

import PokemonCardDetail from "../PokemonCardDetail";

class PokemonCard extends Component {
  //   componentDidMount() {
  // this.gotoPokemonCardDetail();
  //   }

  onClickCard = () => {
    console.log("In onClickCard()");
    this.renderPokemonCardDetail();
  };

  renderPokemonCardDetail = () => {
    console.log("In renderPokemonCardDetail()");
    const { itemDetail } = this.props;
    const { url } = itemDetail;
    return <PokemonCardDetail url={url} />;
  };

  render() {
    const { itemDetail } = this.props;
    const { name } = itemDetail;
    // console.log(itemDetail);

    return (
      <button type="button" onClick={this.onClickCard}>
        <div className="pokemon-card-container">
          <h1 className="pokemon-name">{name}</h1>
        </div>
      </button>
    );
  }
}

export default PokemonCard;
