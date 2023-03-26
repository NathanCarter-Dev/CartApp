import React, {useContext, useState, useEffect} from "react";
import UseToggleState from "../hooks/UseToggleState";

export const CartContext = React.createContext(
  {
    items: [],
    total: 0,
    isActive: false,
    setItems: () => {},
    addItem: () => {},
    minusItem: () => {},
    deleteItem: () => {},
    getTotal: () => {},
    toggleActive: () => {},
    order: () => {}
  }
  )

export const CartContextProvider = (props) => {
  const [items, setItems] = useState(JSON.parse(window.localStorage.getItem('items')) || [])
  let [total, setTotal] = useState(0)
  const [isActive, toggleActive] = UseToggleState(false)
  

  useEffect(() => {
    
    window.localStorage.setItem('items',JSON.stringify(items));
    let newTotal = 0;
    items.map((item) => (newTotal += item.price * item.qty))
    setTotal(newTotal)
  }, [items, total])

  const addItem = (meal) => {

    const includes = items.filter((item) => item.id === meal.id)
    includes.length > 0 
    ? setItems(items.map((item) => {
      if(item.id === meal.id) {
        return {...item, qty: item.qty + meal.qty}} 
        else return item})) 
    : setItems([...items, meal])
  
  }

  const minusItem = (meal) => {

    const includes = items.filter((item) => item.id === meal.id)
    includes.length > 0 
    ? setItems(items.map((item) => { 

      if(item.qty < 2) return {...item, qty: 1}

      if(item.id === meal.id) {
        return {...item, qty: item.qty - 1}} 
        else return item})) 
    : setItems([...items, meal])
      
  }

  const deleteItem = (data) => {
    setItems(items.filter((item) => {
      if(item.id !== data.id) return item
    }))
  }

  const order = () => {
    setItems([])
    alert("Order Complete!")
  }
  return <CartContext.Provider value={
    {
      setItems: setItems,
      items: items,
      addItem: addItem,
      total: total,
      minusItem: minusItem,
      deleteItem: deleteItem,
      isActive: isActive,
      toggleActive: toggleActive,
      order: order
    }
  }>{props.children}</CartContext.Provider>
}

export default CartContext;