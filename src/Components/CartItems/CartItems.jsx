import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const { all_product, cartItems, addToCart, removeFromCart, removeLineItem, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);
    const totalItems = getTotalCartItems();
    const totalAmount = getTotalCartAmount();

    if (totalItems === 0) {
        return (
            <div className="cartitems-empty-container">
                <div className="cartitems-empty-card">
                    <div className="cartitems-empty-icon-3d">🛒</div>
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added anything to your cart yet. Explore our latest collections and find something special!</p>
                    <Link to="/"><button className="cartitems-shop-btn-3d">START SHOPPING</button></Link>
                </div>
            </div>
        );
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-header-3d">
                <h1>Shopping Cart</h1>
                <span className="cartitems-badge-3d">{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
            </div>

            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="cartitems-main-hr" />

            <div className="cartitems-list-3d">
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id} className="cartitems-row-3d">
                                <div className="cartitems-format cartitems-format-main">
                                    <div className="carticon-product-wrapper-3d">
                                        <img src={e.image} alt="" className='carticon-product-icon-3d' />
                                    </div>
                                    <p className="cartitems-product-title">{e.name}</p>
                                    <p className="cartitems-price-3d">${e.new_price.toFixed(2)}</p>

                                    <div className='cartitems-quantity-control-3d'>
                                        <button className="qty-btn-3d" onClick={() => removeFromCart(e.id)}>-</button>
                                        <span className="qty-val-3d">{cartItems[e.id]}</span>
                                        <button className="qty-btn-3d" onClick={() => addToCart(e.id)}>+</button>
                                    </div>

                                    <p className="cartitems-total-price-3d">${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                    <div className="cartitems-remove-icon-wrapper-3d" onClick={() => removeLineItem(e.id)} title="Remove Item">
                                        <img src={remove_icon} alt="Remove" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="cartitems-down-3d">
                <div className="cartitems-total-3d">
                    <h2>Cart Totals</h2>
                    <div className="cartitems-subtotal-box-3d">
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${totalAmount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p className="free-shipping-text">Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item grand-total">
                            <h3>Total</h3>
                            <h3>${totalAmount.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button className="checkout-btn-3d">PROCEED TO CHECKOUT</button>
                </div>

                <div className="cartitems-promocode-3d">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox-3d">
                        <input type="text" placeholder="Promo code" />
                        <button className="promo-btn-3d">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
