import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField :''
    };
  }

  onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    

    this.setState(()=> {return {searchField}})
  }


  //fetching api
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }
  render() {
    const {monsters , searchField} = this.state;
    const {onSearch} = this;

    const fillterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);

    }
    )
 

    return (
      <div className="App">
        
      <SearchBox onChangeHandler={onSearch} placeholder="search monsters"  className="search-monsters"/>
      <CardList  monsters={fillterMonsters} />
      </div>
    );
  }
}

export default App;
