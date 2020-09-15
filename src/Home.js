import React from "react";
import Product from "./Product";
import "./Home.css";


function Home() {
    return ( 
    <div className="home">
        <img 
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-YzQzZjY0OGQt-w1500._CB404804090_.jpg"
        alt=""
        /> 
        
        {/* Product id, titile, price, rating, image */}
        <div className="home__row">
        <Product
        id="12321341"
        title="Samuel Morris: The African Boy God Sent to Prepare an American University for Its Mission to the World (Men of Faith)"
        price={7.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/5175BVK3X7L._SX281_BO1,204,203,200_.jpg"
        /> 
            <Product
        id="8348348834"
        title="Under Armour Men's Charged Assert 8 Running Shoe"
        price={60.60}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61TqihqVjUL._AC_UX535_.jpg"
        />
        </div>
        
        <div className="home__row">
        <Product
        id="83834738738"
        title="Apple iPhone 11 Pro Max (64GB, Silver) [Locked] + Carrier Subscription"
        price={1154.00}
        rating={5}
        image="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro-Max/Midnight-Green/Apple-iPhone-11-Pro-Max-Midnight-Green-frontimage.jpg"
        /> 
        <Product
         id="123213332"
        title="Michael Kors Pyper Three-Hand Stainless Steel Watch"
        price={120.87}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/71983E2GclL._AC_UY606_.jpg"
        /> 

        <Product
        id="98298398"
        title="WEN 56200i 2000-Watt Gas Powered Portable Inverter Generator, CARB Compliant"
        price={431.60}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/816H7dl2GsL._AC_SL1500_.jpg"
        /> 

        </div>

        <div className="home__row">
        <Product
        id="12332993223"
        title="Backyard Discovery Shenandoah All Cedar Wood Playset Swing Set"
        price={2700.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/81swKhvWhpL._AC_SX410_SY308_.jpg"
        /> 
        </div>

        {/* Product */}
        </div>
    );
}

export default Home;
