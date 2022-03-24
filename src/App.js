
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './component/Card/Card';

function App() {

  const [gans, setGans]=useState([]);
  const [cart, setcart]=useState([]);
const handleAddToCart = (id) => {
  console.log(id);
}

useEffect (() =>  {
  fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
  .then((res) => res.json())
  .then((data) => setGans(data));
},[]);

  return (
    <div >
     <Navbar> </Navbar>
     <div className='card-container'>
{
  gans.map(gan => (<Card handleAddToCart={handleAddToCart} data={gan} key={gan.id}></Card>))
}


    </div>
    </div>
  );
}

export default App;
