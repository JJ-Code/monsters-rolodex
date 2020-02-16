import React, { Component } from "react";
import './App.css';
import {CardList} from "./component/card-list/card-list" 
import { SearchBox } from "./component/search-box/search-box" 
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(e){
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }
  render() {
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className="App">
        {/* <SearchBox placeholder='Search Monsters' handleChange={e =>
          this.setState({ searchField: e.target.value })}/> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  } 
}








export default App;




