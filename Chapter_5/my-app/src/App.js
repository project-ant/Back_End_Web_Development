/* 25/03/2021
//import logo from './logo.svg';
import './App.css';

import { Component } from "react";
import ListStudent from "./components/index.js";



class App extends Component {
  state = {
    isShow: false,
  };

  toggleButton = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const backend = [
      {
        name: "John Doe",
        address: "Manado",
      },
      {
        name: "Jane",
        address: "Airmadidi",
      },
      {
        name: "Bob",
        address: "Tondano",
      },
    ];

    /*const webProgramming = [
      {
        name: "Smith",
        address: "Manado",
      },
      {
        name: "Peter",
        address: "Airmadidi",
      },
      {
        name: "Mayrra",
        address: "Tondano",
      },
    ];*/
/*
    return (
      <>
        {this.state.isShow && (
          <ListStudent title="Back-end Programming Class" students={backend} />
        )}
        {/* <ListStudent title="Web Programming Class" students={webProgramming} /> */
        /*<button onClick={this.toggleButton}>Toggle List Student</button>
      </>
    );
  }
}

export default App;

// 30/03/2021

*/

import React from 'react'
import Login from "./components/pages/Login/index"

const App = () => {
  return (
    //JSX
    <Login title="Halaman Login" angka="30"/>
   
  );
};

export default App;