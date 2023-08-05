import "./App.css";
import { useEffect , useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render")
  const [searchField, setsearchField] = useState('');
  const[monsters,setmonsters] = useState([])
  const[fillterMonsters, setfillterMonsters] = useState(monsters);
  const onSearch = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  };
  console.log(searchField)
  

  useEffect(()=>
  {
    const newFillterMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setfillterMonsters(newFillterMonsters)
  },[monsters,searchField])
  
    
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setmonsters(users);
      });
  }, []);

  return (
    <div className="App">
      <h1>MONSTER ROLODEX</h1>
      <SearchBox
        onChangeHandler={onSearch}
        placeholder="search monsters"
        className="search-box-monsters"
      />

      <CardList monsters = {fillterMonsters}/>
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField :''
//     };
//   }

//   onSearch = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(()=> {return {searchField}})
//   }

//   //fetching api
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//         )
//       );
//   }
//   render() {
//     const {monsters , searchField} = this.state;
//     const {onSearch} = this;

//     const fillterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);

//     }
//     )

//     return (
//       <div className="App">
//         <h1>MONSTER ROLODEX</h1>
//       <SearchBox onChangeHandler={onSearch} placeholder="search monsters"  className="search-box-monsters"/>
//       <CardList  monsters={fillterMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
