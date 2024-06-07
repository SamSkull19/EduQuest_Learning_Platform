import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const generatePhoneNumber = () => {
    const firstDigit = Math.floor(Math.random() * 7) + 3;
    const remainingDigits = Math.floor(10000000 + Math.random() * 90000000);
    return `+8801${firstDigit}${remainingDigits}`;
};


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    const phoneNumber = generatePhoneNumber();

    return (
        <div className="max-w-sm overflow-hidden shadow-lg bg-teal-700 p-6 m-auto mt-10 rounded-3xl mb-40">
            <div className="flex flex-col items-center max-w-96">
                <img className="w-50 h-60 rounded-3xl mb-4" src={user?.photoURL} alt={user?.displayName} />
                <div className="text-center text-amber-200">
                    <div className="font-bold text-4xl text-white mb-3">Name : {user?.displayName || "User Name"}</div>
                    <p className="text-xl font-medium mb-2">Email : {user?.email || "User Email"}</p>
                    <p className="text-lg font-medium mb-2">Contact Number : {phoneNumber}</p>
                    <p className="text-xl font-semibold">Role : {user?.role || "Student"}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;