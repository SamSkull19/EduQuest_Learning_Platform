import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);


const Payment = () => {
    const location = useLocation();
    const courseDetail = location.state?.courseDetail;
    console.log(courseDetail);
    
    return (
        <div>
            <h2 className="mb-6 mt-10 text-4xl text-center font-extrabold text-amber-400">Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm courseDetail={courseDetail}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;