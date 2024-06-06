import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";


const CheckoutForm = ({ courseDetail }) => {
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    console.log(courseDetail);

    const { _id, title, name, price } = courseDetail;

    const totalPrice = price;

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })

            .catch(error => {
                console.error('Error creating payment intent:', error);
                setError('Failed to create payment intent.');
            });

    }, [axiosSecure, totalPrice]);


    console.log(clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })


        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })


        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    courseId: _id,
                    courseTitle: title,
                    price: price,
                    transactionId: paymentIntent.id,
                    instructor: name,
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);

                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for The Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }

            }
        }


    };

    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit}>
                <div className='border-2 p-5 border-teal-800'>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '25px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <div className='flex justify-center mt-5'>
                    <button className="btn bg-teal-800 my-4 text-xl text-white w-2/12" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

CheckoutForm.propTypes = {
    courseDetail: PropTypes.object.isRequired,
}

export default CheckoutForm;