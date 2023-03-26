import React, { useContext} from "react";
import CartContext from "../context/CartContext";
import CartList from "./CartList";
import ReactDOM from "react-dom" 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius, Container } from "@mui/system";
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Grow from '@mui/material/Grow';
import { List } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '.5rem'
};

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  return(
    <>
    {cartCtx.isActive && 
    <>
    
    <Modal
        open={cartCtx.toggleActive}
        onClose={cartCtx.toggleActive}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
            {cartCtx.items.map((item) => (
          <Box className="Cart-Item">
            {cartCtx.isActive &&
            <>
            
            <List sx={{display: 'flex', alignItems: 'center', borderBottom: '1px solid black'}}>
            <CartList key={item.id} data={item}/> 
            </List>
            </> 
            }
            </Box>
          ))}
          
          <Typography padding='1rem' textAlign='center' id="modal-modal-title" fontWeight='600' variant="h6" component="h2">
          Total Amount: £{Math.round((cartCtx.total + Number.EPSILON) * 100) / 100}
          </Typography>
          
          <Stack width='50%' margin='auto' spacing={2}>
            <Button onClick={cartCtx.toggleActive} variant="outlined" startIcon={<CloseIcon />}>
              Close
            </Button>
            <Button onClick={() => {if(cartCtx.items.length > 0) cartCtx.order()}} sx={{backgroundColor:'#99391f'}} color='error'  variant="contained" endIcon={<SendIcon />}>
              Order
            </Button>
         </Stack>
        </Box>
      </Modal>
    <h2></h2>
    
    </> }

    
    </>
  )
}

const Cart = (props) => {
  return(
    <>

    {ReactDOM.createPortal(<CartModal/>, document.getElementById('modal-root'))}
    </>
  )
}



export default Cart