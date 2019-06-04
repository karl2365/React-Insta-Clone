import React from 'react';
import './App.scss';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }



  render () {
    console.log(this.state.data);
    return (

      
      <div className="App">
        <SearchBar submit={this.searchData} />
        {this.state.data.map(data => (
          <PostContainer data={data} key={data.id} />
        ))}

      </div>
    );

  }
}
export default App;
