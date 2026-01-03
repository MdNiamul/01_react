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
    <Bike bikeName="Yamaha" bikeModel="FZ" bikeColor="Blue" bikePrice="1500$"></Bike>
    <Bike bikeName="Honda" bikeModel="CBR" bikeColor="Red" bikePrice="2000$"></Bike>
    <Bike bikeName="Suzuki" bikeModel="Gixxer" bikeColor="Black" bikePrice="1800$"></Bike>
    <Phone phoneName="iPhone" phoneModel="13 Pro" phoneColor="Silver" phonePrice="999$"></Phone>
    <Phone phoneName="Samsung" phoneModel="Galaxy S21" phoneColor="Phantom Gray" phonePrice="799$"></Phone>
    <Phone phoneName="Google Pixel" phoneModel="6 Pro" phoneColor="Stormy Black" phonePrice="899$"></Phone>
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

function Bike(Props){
  return(
    <div style={{
      border: '2px solid',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px',
      flexDirection: 'inherit',
    }}>
      <h3>Bike Component</h3>
      <p>Bike Name: {Props.bikeName}</p>
      <p>Bike Model: {Props.bikeModel}</p>
      <p>Bike Color: {Props.bikeColor}</p>
      <p>Bike Price: {Props.bikePrice}</p>
    </div>
  )
}

function Phone(Props){
  return(
    <div style={{
      border: '2px solid',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px',
      flexDirection: 'inherit',
    }}>
      <h3>Phone Component</h3>
      <p>Phone Name: {Props.phoneName}</p>
      <p>Phone Model: {Props.phoneModel}</p>
      <p>Phone Color: {Props.phoneColor}</p>
      <p>Phone Price: {Props.phonePrice}</p>
    </div>
  )
}

export default App


