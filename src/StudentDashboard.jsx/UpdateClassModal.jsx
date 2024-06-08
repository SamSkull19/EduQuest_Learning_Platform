import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from 'sweetalert2';


const UpdateClassModal = ({ course, onClose }) => {
    const { _id, title, image, price, shortdescription } = course;
    const [updatedCourse, setUpdatedCourse] = useState({ title, image, price, shortdescription });

    const queryClient = useQueryClient();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCourse(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/courseLists/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCourse)
        })
        .then(() => {
            Swal.fire('Updated!', 'Your class has been updated.', 'success');
            queryClient.invalidateQueries('courses');
            onClose();
        })
        .catch((error) => {
            Swal.fire('Error!', 'Failed to update the class.', error);
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div className="bg-stone-300 p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl mb-4 font-semibold">Update Class Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                        <input id="title" name="title" type="text" value={updatedCourse.title} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image URL</label>
                        <input id="image" name="image" type="text" value={updatedCourse.image} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-lg font-medium text-gray-700">Price</label>
                        <input id="price" name="price" type="number" value={updatedCourse.price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="shortdescription" className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea id="shortdescription" name="shortdescription" value={updatedCourse.shortdescription} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-stone-700 text-white rounded-md">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

UpdateClassModal.propTypes = {
    course: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default UpdateClassModal;
