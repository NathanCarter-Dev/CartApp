import React, {useContext, useState, useEffect, useReducer} from "react";
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

  const totalStateReducer = (state, action) => {
    const meal = action.payload
    switch (action.type) {
      case 'ADD': 

      const includesAdd = items.filter((item) => item.id === meal.id)
        includesAdd.length > 0 
        ? setItems(items.map((item) => {
          if(item.id === meal.id) {
            return {...item, qty: item.qty + meal.qty}} 
            else return item})) 
        : setItems([...items, meal])
      break
      case 'MINUS':
        const includesMinus = items.filter((item) => item.id === meal.id)
        includesMinus.length > 0 
        ? setItems(items.map((item) => { 
    
          if(item.qty < 2) return {...item, qty: 1}
    
          if(item.id === meal.id) {
            return {...item, qty: item.qty - 1}} 
            else return item})) 
        : setItems([...items, meal])
      break
    }
  }

  const [items, setItems] = useState(JSON.parse(window.localStorage.getItem('items')) || [])
  let [total, setTotal] = useState(0)
  const [isActive, toggleActive] = UseToggleState(false)
  const [totalState, dispatchTotal] = useReducer(totalStateReducer, 0)
  

  useEffect(() => {
    
    window.localStorage.setItem('items',JSON.stringify(items));
    let newTotal = 0;
    items.map((item) => (newTotal += item.price * item.qty))
    setTotal(newTotal)
  }, [items, total])

  const addItem = (meal) => {
    dispatchTotal({type: 'ADD', payload: meal})
  }

  const minusItem = (meal) => {
    dispatchTotal({type: 'MINUS', payload: meal})
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