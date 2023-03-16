import "./index.css";

import { Component } from "react";

class PokemonCard extends Component {
  state = {
    pokemonDetailData: "",
  };

  componentDidMount() {
    this.getPokeMonDetail();
  }

  getPokeMonDetail = async () => {
    const { itemDetail } = this.props;
    const { url } = itemDetail;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    // console.log(response);
    const data = await response.json();
    // console.log(data);

    if (response.ok) {
      this.setState({ pokemonDetailData: data });
    }
  };

  //   onClickCard = () => {
  //     <PokemonCardDetail pokecardDetails={} />;
  //   };

  render() {
    const { itemDetail } = this.props;
    const { name } = itemDetail;
    // console.log(itemDetails);
    //id is not present in itemDetail
    return (
      //   <button type="button" onClick={this.onClickCard}>
      <div className="pokemon-card-container">
        <h1 className="pokemon-name">{name}</h1>
      </div>
      //   </button>
    );
  }
}

export default PokemonCard;
