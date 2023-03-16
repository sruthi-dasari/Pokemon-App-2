import "./index.css";

import { Component } from "react";

class PokemonCardDetail extends Component {
  componentDidMount() {
    this.getPokemonDetail();
  }

  getPokemonDetail = async () => {
    console.log("In getPokemonDetail()");
    const { url } = this.props;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    // console.log(data);

    if (response.ok) {
      this.setState({ pokemonDetailData: data });
    }
  };

  render() {
    console.log("In PokemonCardDetail component");
    return;
  }
}

export default PokemonCardDetail;
