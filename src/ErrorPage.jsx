import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-60">
            <div className="text-center">
                <h1 className="mb-4 text-9xl font-semibold text-green-950">404</h1>
                <p className="mb-4 text-2xl text-gray-600">Oops! Looks like you are lost.</p>
                <div className="animate-bounce t">
                    <svg className="mx-auto h-16 w-16 text-green-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
                <p className="mt-4 text-gray-600 text-4xl">Lets get you back <Link to='/' className="text-blue-500">Home</Link>.</p>
            </div>
        </div>
    );
};

export default ErrorPage;