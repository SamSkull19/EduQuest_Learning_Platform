import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from 'axios';

const CheckoutForm = ({ courseDetail }) => {
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // const axiosSecure = useAxiosSecure();
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    console.log(courseDetail);

    const { _id, title, name, price } = courseDetail;

    const totalPrice = price;

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price: totalPrice })
          .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          })
          
          .catch(error => {
            console.error('Error creating payment intent:', error);
            setError('Failed to create payment intent.');
          });

      }, [totalPrice]);

    // useEffect(() => {
    //     if (totalPrice > 0) {
    //         axios.post('http://localhost:5000/create-payment-intent', { price: totalPrice })
    //             .then(res => {
    //                 console.log(res.data.clientSecret);
    //                 setClientSecret(res.data.clientSecret);
    //             })
    //     }

    // }, [totalPrice])

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

                const res = await axios.post('http://localhost:5000/payments', payment);
                console.log('payment saved', res.data);

                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/') //dashboard/paymentHistory
                }

            }
        }


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
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
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
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