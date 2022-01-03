import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';
import CheckoutProduct from "./CheckoutProduct";
import "./Note.css"
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";
function Note({id,image,price,rating}) {
const [{basket},dispatch]= useStateValue();

  const removeFromBasket = () =>{
    //remove the item from basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id:id,
    });
}
  return (
    <Zoom in={true}>
    <div className="note">
    
                <CheckoutProduct id={id}
                    image={image}
                    price={price}
                    rating={rating}
                    hidebutton                   
                    />
     <Button onClick={removeFromBasket}><DeleteIcon /></Button>
    </div>
    </Zoom>
  );
}

export default Note;
