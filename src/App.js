
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {
  console.log('render');
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchField(keyword);
  }
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
    });
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        placeholder='search monsters'
        onChangeHandler={(e) => onSearchChange(e)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
