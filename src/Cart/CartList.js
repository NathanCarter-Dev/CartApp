import { Box, Card, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
const CartList = ({data}) => {
  const cartCtx = useContext(CartContext)
  return(
    <>
  <Container>
    <List sx={{display: 'flex', alignItems: 'center', borderBottom: '1px solid black'}}>
      <ListItem >
        <IconButton onClick={() => cartCtx.deleteItem(data)}><CloseIcon/></IconButton>
        <Box textAlign='start'>
       <Typography fontWeight='600' variant='h6' component='h1'>{data.name}</Typography>
       <Typography   color='#99391f' fontWeight='800' variant='p' component='p'>£{data.price}</Typography>
       </Box>
      </ListItem>
     <ListItem>
       <Card>
       <Typography padding='.5rem' fontWeight='300' variant='p' component='p'>x{data.qty}</Typography>
       </Card>
       
     </ListItem>    
    <ListItem>

    </ListItem>
    
    <Stack direction="row" spacing={2}>
       <Button style={{height: '2rem'}} onClick={() => cartCtx.minusItem(data)} variant="outlined">
           -
       </Button>
        <Button style={{height: '2rem', backgroundColor:'#99391f'}} onClick={() => cartCtx.addItem({...data, qty: 1})} color="error" variant="contained">
           +
        </Button>
    </Stack>
    </List>
    </Container>
    </>
  )
}

export default CartList