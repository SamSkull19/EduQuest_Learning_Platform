import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
import { FaCcMastercard } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcJcb } from "react-icons/fa6";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);


const Payment = () => {
    const location = useLocation();
    const courseDetail = location.state?.courseDetail;
    console.log(courseDetail);

    return (
        <div className="max-w-[1170px] mx-auto mt-10">
            <h2 className="mb-6 mt-10 text-4xl text-center font-extrabold text-teal-800">Payment</h2>
            <h2 className="mb-6 mt-10 text-2xl text-center font-medium text-teal-800">Payment Through Your Favorite Way</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-between items-center text-9xl text-teal-800 ml-12 lg:ml-0'>
                <div>
                    <FaCcMastercard />
                    <p className='text-2xl font-medium'>MasterCard</p>
                </div>

                <div>
                    <FaPiggyBank />
                    <p className='text-2xl font-medium'>TrustBank</p>
                </div>

                <div>
                    <FaRegCreditCard />
                    <p className='text-2xl font-medium'>CreditCard</p>
                </div>

                <div>
                    <FaCcDiscover />
                    <p className='text-2xl font-medium'>Discover</p>
                </div>

                <div>
                    <SiAmericanexpress />
                    <p className='text-2xl font-medium'>American<br />Express</p>
                </div>

                <div>
                    <FaCcJcb />
                    <p className='text-2xl font-medium'>JCB</p>
                </div>

            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm courseDetail={courseDetail}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;