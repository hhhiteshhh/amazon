import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
const [{basket,user},dispatch]=useStateValue(0);
const history = useHistory();
// console.log(basket[1].price);
return <div className="subtotal">
        <CurrencyFormat
          renderText={(value)=>(
              <>
              <p> {/*part of the home work*/}
                Subtotal ({basket?.length} items):<strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                  <input type="checkbox" />This order contains a gift
              </small>
              </>
          )} 
          decimalScale={2}
          value={getBasketTotal(basket)}
          //part of home work
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs."}
          />
          <button onClick={()=>history.push(user?"/payment":"/login")}>Proceed to Checkout</button>       
        </div>
}

export default Subtotal
