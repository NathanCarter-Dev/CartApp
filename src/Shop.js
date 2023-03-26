import React, {useState} from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { v4 as uuidv4 } from 'uuid';

const Shop = (props) => {
  const [addQty, setAddQty] = useState(1)
  const meals = [
    {name: 'Sushi', description: 'Finest fish and veggies',amount: 1, price: 22.99, id: 1},
    {name: 'Schnitzel', description: 'A German specialty!',amount: 1, price: 16.50, id: 2},
    {name: 'Barbecue Burger', description: 'American, raw, meaty', amount: 1, price: 12.99, id: 3},
    {name: 'Green Bowl', description: 'Healthy... and green...',amount: 1, price: 18.99, id: 4},
  ]

  return(
    <>
    <Cart key={23423423}/>
    <Header/>
    <Meals addQty={addQty} setAddQty={setAddQty} meals={meals}/>
    </>
  )
}

export default Shop