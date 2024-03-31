import React, { useEffect, useState } from "react";
import './Pay.scss';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/requests.js";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm.jsx";

const stripePromise = loadStripe("pk_test_51P0JiTRwpcvuR5LQqWqWmgguFGuhTwOaniDwpK4Y3k9XGo0c6Bv1GUMxcmIH9aqaA5WtjzF8eWXPgf32nlVWezSz00RxW2Ennr");


const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {

            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret)
            } catch (error) {
                console.log(error);
            }
        }
        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="pay">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}

export default Pay;