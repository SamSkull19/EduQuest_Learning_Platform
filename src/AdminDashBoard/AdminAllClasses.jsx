import { useQuery } from '@tanstack/react-query';
import { Table } from 'reactstrap';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import AdminAllClass from './AdminAllClass';
import { useState } from 'react';
import Pagination from '../AllClasses/Pagination';

const AdminAllClasses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/courseLists');
            return res.data;
        }
    });

    const handleClassApprove = async (id) => {
        await axiosSecure.put(`/courseLists/approve/${id}`);
        Swal.fire('Success', 'Class approved successfully!', 'success');
        refetch();
    };

    const handleClassReject = async (id) => {
        await axiosSecure.put(`/courseLists/reject/${id}`);
        Swal.fire('Success', 'Class rejected successfully!', 'success');
        refetch();
    }


    const pageSize = 10;
    const indexOfLastCourse = currentPage * pageSize;
    const indexOfFirstCourse = indexOfLastCourse - pageSize;
    const currentCourses = classes.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='p-20'>
            <h2 className="text-4xl text-slate-800 font-bold text-center mb-5">All Classes</h2>
            <Table bordered className='text-lg font-bold bg-teal-700 text-white'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Short Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentCourses.map(cls => <AdminAllClass key={classes._id} cls={cls} handleClassApprove={handleClassApprove} handleClassReject={handleClassReject}></AdminAllClass>)
                    }
                </tbody>
            </Table>

            <div className="flex justify-center mt-20">
                <Pagination itemsPerPage={pageSize} totalItems={classes.length} currentPage={currentPage} paginate={paginate}></Pagination>
            </div>
        </div>
    );
};

export default AdminAllClasses;
