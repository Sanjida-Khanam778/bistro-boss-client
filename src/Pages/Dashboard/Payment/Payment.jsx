import React from 'react';
import SharedTitle from '../../../Components/SharedTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

    return (
        <div>
            <SharedTitle title={'PAYMENT'} subtitle={'Please pay to eat'}></SharedTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;