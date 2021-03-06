import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      inputValue: "",
      listOfTodos: []
    }
  }
  

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  handleRemove = (index) => {
    // this.state.listOfTodos.splice(index, 1)
    console.log(index.target.value)
    let list = this.state.listOfTodos
    let splicey = index.target.value
    list.splice(splicey, 1)
    this.setState({listOfTodos: [...list]})
  }

  render(){

      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type="submit">GO</button>
          </form>

             <ul>{this.state.listOfTodos.map((todo, index) => {
              //  console.log(todo, index)
              return <div key={index} value={index} className='lidiv' >
                <li> {todo} </li>
                <button value={index} onClick={(index) => {this.handleRemove(index)}}>Done</button>
              </div>
              })}</ul>  

          <div>
            {this.props.name}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
