import React from "react";
import Meal from "./Meal";
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import { Paper, ListItem, Container } from "@mui/material";
const Meals = ({meals, addQty, setAddQty}) => {
  return (
    <>

    <Container sx={{marginTop: '6.5rem'}}>
    <Paper elevation={5}>
    <List>
    {meals.map((meal) => <ListItem sx={{}}><Meal key={uuidv4()} mealProps={meal} addQty={addQty} setAddQty={setAddQty}/></ListItem>)}
    </List>
    </Paper>
    </Container>
    </>
  )}

export default Meals;