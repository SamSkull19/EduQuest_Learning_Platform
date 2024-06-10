import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://b9a12-server-side-sam-skull19.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;