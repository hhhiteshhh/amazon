import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Zoom } from '@material-ui/core';
// import FlipMove from 'react-flip-move';

function Checkout() {
const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
       <div className="checkout__left">
           <img
           className="checkout__ad"
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
            alt=""
            />
         <Zoom in={true}>
        <div>
            <h3>Hello,{user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
         {basket.map(item =><CheckoutProduct
                className="productOnCheckout"
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
             />
         )}
        </div>
         </Zoom>
       </div>
       <div className="checkout__right">
        <Subtotal />
       </div>
        </div>
    )
}

export default Checkout
