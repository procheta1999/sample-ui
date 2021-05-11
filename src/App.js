import React, {useState} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Header from './sections/header';
import Content from './sections/content';


import colors from './colors/color';
import Burger from './sections/drawer';

const App = () => {
  
  return (
    <div className="App">
      <div className="small-screen">
      <Burger/>
      </div>
      <div className="visible">
     <Header/>
  </div>
       
      <Content/>
     
    </div>
  );
}

export default App;
