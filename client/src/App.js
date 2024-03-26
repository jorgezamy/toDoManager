import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Axios from 'axios';


const addEmployee = () => {
  Axios.get("/create", { responseType: 'arraybuffer' }).then(response => {
    var buffer = new Buffer(response.data, 'binary');
    var textdata = buffer.toString(); // for string
    console.log(textdata);
    var jsondata = buffer.toJSON(); // for json
    console.log(jsondata);
  });
}

class App extends Component {

  // constructor (props){
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoading: false
  //   };
  // }

  // componentDidMount(){
  //   // fetch('/create')
  //   //   .then(res => res.json())
  //   //   .then(json => {
  //   //     this.setState({
  //   //       isLoaded: true,
  //   //       items: json
  //   //     })
  //   //   });
  //   this.setState({isLoading: true});
  //   fetch(addEmployee)
  //     .then(res => res.json())
  //     .then(({ items }) => {
  //       this.setState({
  //         isLoaded: true,
  //         items
  //       });
  //     });
  // }
  
  state = {
    persons: [],
    items: [],
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })   
  }

  empleados = () => {
    Axios.get('/create')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })   
  }

  render () {

    // var { isLoading, items } = this.state;

    // if(!isLoading)
    // {return <div>Loading...</div>}

      return(
      <div className="App">
        <div>
          {/* <ul>
            {items.map(({ id, statistics }) => (
              <li key={id}>
                Total views: {statistics.cantidad}
                Total subscribers: {statistics.cantidad}
                Total videos: {statistics.cantidad}
              </li>
            ))}
          </ul> */}
          <ul>
            { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
          </ul>

          <button onClick={this.empleados}>Submit</button>

          <ul>
        { this.state.items.map(item => <li key={item.precio}>precio: {item.NoEmpleado}</li>)}
          </ul>
          
        </div>
      </div>
      );
  };
}

export default App;