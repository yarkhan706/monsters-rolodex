import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField :''
    };
  }
  //fetching api
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
  }
  render() {

    const fillterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);

    }
    )
 

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="SEARCH MONSTERS"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            

            this.setState(()=> {return {searchField}})
          }
        }
        />
        {fillterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
