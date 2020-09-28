import React, {useState, useEffect} from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import {db} from "./firebase";


function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [cart])

    console.log("Secret is ", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "");
    }


  return (
    <div className="payment">
        <div className="payment__container">
            <h2>
                Checkout ({<Link to='/checkout'>{cart?.length} items</Link>})
            </h2>
            <div className="payment__section">
                <div className="payment__title">
                    <h4>Delivery Address</h4>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>A1-508, Kumar Palm Meadows</p>
                    <p>Pisoli Road, Pune-48</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h4>Review items and delivery</h4>
                </div>
                <div className="payment__items">
                    {cart.map((item) => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            
            <div className="payment__section">
                <div className="payment__title">
                    <h4>Payment Details</h4>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText = {(value) => (
                                <>
                                    <h4>Order Total: {value}</h4>
                                </>
                                )}
                                decimalScale = {2}
                                value = {getCartTotal(cart)} //part of the homework
                                displayType = {"text"}
                                thousandSeparator = {true}
                                prefix = {"$"} 
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}

                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Payment;
