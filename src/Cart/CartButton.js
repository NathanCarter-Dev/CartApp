import React, {useContext} from "react";
import CartContext from "../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Card, IconButton, Typography } from "@mui/material";

const CartButton = () => {
  const cartCtx = useContext(CartContext)
  const qty = cartCtx.items.length
  console.log(qty)
  return(
    <>
    <Card sx={{width:'162px',maxHeight: '50px', textAlign: 'center', backgroundColor: '#9f391f'}}>
    <IconButton  onClick={cartCtx.toggleActive}>
    <ShoppingCartIcon />
    <Typography  variant="h3" component='p'/>Your Cart<Typography/>
    <Typography marginLeft='.5rem' variant="p" component='p'/>{qty}<Typography/>
    </IconButton>
    
    </Card>
    </>
  )
}

export default CartButton