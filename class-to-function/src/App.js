import React, { /*Component,*/ useState, useEffect } from "react";
import "./App.css";
import CardList from "./ColorCard/ListOfCards.js";
import Searchbar from "./Searchbar/Searchbar.js";

const App = () => {

  const [search, setSearch] = useState("");

  /*welcome üzenetet jeleníti meg felugró ablakban az oldal betöltésekor
  useEffect(() => {
    document.addEventListener('click', welcome);
  });

  const welcome = () => {
    alert("Hello!");
  };  */

  return (
    <div>
      <h3>Start typing the searched color in English!</h3>
      <Searchbar search={search} setSearch={setSearch} />
      <CardList search={search} />
    </div>
  );
}

/*class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.welcome);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.welcome);
  }

  welcome = () => {
    alert("Hello!");
  };

  render() {
    return (
      <div>
        <Searchbar search={this.setState} />
        <CardList search={this.state.search} />
      </div>
    );
  }
}*/

export default App;
