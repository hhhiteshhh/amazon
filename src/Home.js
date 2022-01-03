import React from 'react';
import "./Home.css";
import Product from "./Product"
import CarouselPage from './slideFeature';
import {itemData,itemData2} from "./itemsData.js";
import Note from './Note';
import { useStateValue } from './StateProvider';

function Home() {
    const [{basket}]=useStateValue();
    return (
        <div className="home">
            <div className="home__container">
            
            <CarouselPage className="carousel" />
            <div className="noteBox">

            {basket?.map((item) =>(
                <Note id={item.id} image={item.image} price={item.price} rating={item.rating} />
            ))}
            </div>
            <div className="home__row">
                <Product
                id="12321" 
                title='Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6" Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812' 
                price={758.00}
                image={"https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"} 
                rating={5}
                />
                <Product
                id="234324233423"
                title='Kenwood KMix Stand Mixer for Baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whish, 5 Litre Glass Bowl' 
                price={239.0} 
                image={"https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"} 
                rating={4}
                 />
            </div>
            <div className="home__row">
                <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor" 
                price={199.99} 
                image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC_SX466_.jpg"} 
                rating={3}
                 />
                <Product
                id="2344593"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                price={98.99} 
                image={"https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"} 
                rating={5}
                 />
                <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                price={598.99} 
                image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"} 
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                id="112342312"
                title="Samsung LC49RG90SSUXEN 49 Curved LED Gamin Monitor -Super Ultra Wide Dual WQHD 5120 x 1440" 
                price={1094.98} 
                image={"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX385_.jpg"} 
                rating={4}
                />
            </div>
            <div className="lastRow">
                {itemData.map((item)=><Product id={item.id} 
                title={item.title} price={item.price} image={item.image} rating={item.rating} />
                     )}
            </div>
            <div className="lastRow">
                {itemData2.map((item)=><Product id={item.id} 
                title={item.title} price={item.price} image={item.image} rating={item.rating} />
                     )}
            </div>
            
            </div>
        </div>
    );
}

export default Home;
