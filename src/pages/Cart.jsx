import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from "../assets/empty_cart.svg"

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += +((item.salePrice || item.originalPrice) * item.quantity).toFixed(2)
        });
    return price;
};
    

    return (
        <div id="vehicles__body">
            <main id="vehicles__main">
                <div className="container">
                    <div className="row ">
                        <div className="vehicle__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__car">Car</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(car => {
                                        return(
                                            <div className="cart__item">
                                                <div className="cart__car">
                                                    <img src={require('../assets/' + car.url )} alt="" className="cart__car--img" />
                                                    <div className="cart__car--info">
                                                        <span className="cart__car--title">{car.name}</span>
                                                        <span className="cart__car--price">${(car.salePrice || car.originalPrice).toFixed(2)}</span>
                                                        <button className="cart__car--remove" onClick={() => removeItem(car)}>Remove</button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input 
                                                    type="number" 
                                                    min={0} max={99}
                                                    value={car.quantity}
                                                    onChange={(event) => changeQuantity(car, event.target.value)}
                                                    
                                                    className="cart__input" />
                                                </div>
                                                <div className="cart__total">${(
                                                    (car.salePrice ||  car.originalPrice) * car.quantity).toFixed(2)}</div>
                                            </div>
                                            
                                        )
                                    })
                                }
                                
                            </div>
                            {cart.length === 0 && (
                            <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You dont have any books in your cart</h2>
                                <Link to="/books">
                                    <button className="btn">Browse books</button>
                                </Link>
                            </div>
                            )}
                            
                        </div>
                        {cart.length > 0 && (<div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(total() * 0.9).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(total() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${(total()).toFixed(2)}</span>

                            </div>

                            <button className="btn btn__checkout no-cursor" 
                            onClick={() => alert(`Haven't got around to doing this :()`)}>Proceed to checkout</button>
                        </div>)}
                    </div>
                </div>
            </main>
            
        </div>
    );
}

export default Cart;
