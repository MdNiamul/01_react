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

export default App


