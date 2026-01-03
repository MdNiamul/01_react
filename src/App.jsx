// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <Person></Person>
    <Person></Person>
    <Test></Test>
    <Ul> </Ul>
    <Car></Car>
    <Student name="Niamul" age={25}></Student>
    <Student name="Rahim" age={26}></Student>
    <Student name="Karim" age={27}></Student>
    <Laptop model="Dell Inspiron" price="70000$" brand="Dell" color="Black" processor="Intel i7"></Laptop>
    <Laptop model="MacBook Pro" price="150000$" brand="Apple" color="Silver" processor="M1"></Laptop>
    <Laptop model="HP Pavilion" price="80000$" brand="HP" color="Gray" processor="Intel i5"></Laptop>
    <Laptop model="Lenovo ThinkPad" price="90000$" brand="Lenovo" color="Black" processor="Intel i7"></Laptop>
     </>
  )
}


function Person(){
  return (
    <p>niamul is engineer</p>
  )
}

function Test(){
  const age = 30;
  return(
    <p>{age}</p>
  )
}

function Ul(){
  const name= "niamul";
  return(
    <ul>
      <li>{name}</li>
    </ul>
  )
}

function Car(){
  const carName = "toyota";
  const carModel = "2020";
  const carColor = "red"; 
  const carPrice = "50000$";
  return(
    <div>
      <h3>Car Component</h3>
      <p>Car Name: {carName}</p>
      <p>Car Model: {carModel}</p>
      <p>Car Color: {carColor}</p>
      <p>Car Price: {carPrice}</p>
    </div>
  )
}

function Student(Props){
  console.log(Props);
  return(
    <div style={{
      border: '2px solid',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px'
    }}>
      <h3>Student Component</h3>
      <p>Name: {Props.name}</p>
      <p>Age: {Props.age}</p>
    </div>
  )
}

function Laptop(Props){
  return(
    <div style={{
      border: '2px solid',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px',
      flexDirection: 'inherit',
    }}>
      <h3>Laptop Configration</h3>
      <p>Model: {Props.model}</p>
      <p>Price: {Props.price}</p>
      <p>Brand: {Props.brand}</p>
      <p>Color: {Props.color}</p>
      <p>Processor: {Props.processor}</p>
    </div>
  )
}

export default App


