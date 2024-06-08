import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const classAdd = {
            title: data.title,
            name: user.displayName,
            image: data.image,
            price: data.price,
            shortdescription: data.shortdescription,
            totalenrolment: 0,
            status: 'pending',
            email: user.email
        }

        console.log(data);
        console.log(classAdd);

        const response = await axiosSecure.post('/courseLists', classAdd);

        console.log(response.data);

        if (response.data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Class Add Request Submitted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            navigate('/dashboard/myAddClass');
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add class',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div>
            <div>
                <h2 className="text-4xl text-slate-800 font-bold text-center mb-5">Add Classes</h2>
            </div>
            <div className="w-[380px] mx-auto mt-10 bg-teal-800 p-8 rounded-xl">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-200">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            {...register('title', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-200">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={user.displayName}
                            readOnly
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-200">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={user.email}
                            readOnly
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-lg font-medium text-gray-200">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            {...register('price', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="shortdescription" className="block text-lg font-medium text-gray-200">
                            Description
                        </label>
                        <textarea
                            id="shortdescription"
                            {...register('shortdescription', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-lg font-medium text-gray-200">
                            Image URL
                        </label>
                        <input
                            id="image"
                            type="text"
                            {...register('image', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg "
                    >
                        Add Class
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;
