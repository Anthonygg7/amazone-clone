import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        //  remove item from  basket...
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

    }
    
    return (
        <div className="checkoutProduct">
        <img className ="checkoutProduct__image" src={image} alt=""
        />
        
        <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>   
      </div>
    </div>
  );
}
export default CheckoutProduct;