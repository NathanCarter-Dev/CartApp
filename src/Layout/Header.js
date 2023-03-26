import React, {useContext} from "react";
import CartButton from "../Cart/CartButton";
import { AppBar, Typography, Toolbar, Container, Box } from "@mui/material";
import { display } from "@mui/system";


const Header = (props) => {

  return(
    <>
    <AppBar className="Header" color='primary'  style={{height: '64px', backgroundColor: '#99391f', width: '100%'}}>
        <Toolbar sx={{display: 'flex'}}>
          <Typography fontWeight='600' variant="h4" component='h1' color='inherit'>ReactMeals</Typography>
          <Box marginLeft='auto' className="Header-Cart">
            <CartButton/>
          </Box>
        </Toolbar>
      </AppBar>

      
    </>
  )
}

export default Header