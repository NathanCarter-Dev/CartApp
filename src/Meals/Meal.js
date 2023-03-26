import React, { useContext, useRef } from "react";
import CartContext from "../context/CartContext";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Box, Container, Typography } from "@mui/material";
const Meal = (props) => {
  const cartCtx = useContext(CartContext)
  const addQtyRef = useRef()
  const {name, description, price, id} = props.mealProps
  
  return(
    <>

    <Container sx={{borderBottom: '1px solid #d9d9d9', margin: '1em 0', flexDirection:'row', display: 'flex'}}>
      <ListItem>

        <Box>
        <Typography variant="h5" fontWeight='700' component='h1'>{name}</Typography>
        <Typography variant="p" fontWeight='300' component='p'>{description}</Typography>
        <Typography color='#99391f' variant="p" fontWeight='800' component='p'>£{price}</Typography>
        </Box>
      </ListItem>
    
      <ListItem sx={{justifyContent: 'end'}}>
        
      <TextField
          type='number'
          label="Amount"
          id="outlined-size-small"
          defaultValue={props.addQty}
          size="small"
          inputRef={addQtyRef}
          />

      <Button onClick={() => {
        if(addQtyRef.current.value < 1) {
          //invalid number
        } else {
          cartCtx.addItem({name, description, price, qty: Number(addQtyRef.current.value), id})
        }
      }} style={{height: '2rem', backgroundColor:'#99391f'}} color='error' variant="contained">
           +ADD
        </Button>

      </ListItem>

      </Container>
      
      
    </>
  )
}

export default Meal
