import logo from './logo.svg';
import './App.css';

import Body from './component/body'
import Tablist from './component/tablist'
import {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      active :1
    }
    this.changetab = (id) =>{
      this.setState({
        active :id
      })
    }
  }

render(){
  const tabs =[{
    id:1,
    title:'Video'
  },
  {
    id:2,
    title: 'Image'
  },
  {
    id:3,
    title:'Text'
  },
  {
    id:4,
    title: 'Table'
  },
  {
    id:5,
    title: 'Email'
  }
  ]

  return(
    <div className="App">

    <div className="nav-bar">
    {/* pass variable inside curly brackets*/}
      <Tablist tabs = {tabs} activetab ={this.state.active} ctab ={this.changetab}/>
    </div>
      <div className="main-body">
      <Body activetab ={this.state.active}/>
      </div>
      </div>
  );
}
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
