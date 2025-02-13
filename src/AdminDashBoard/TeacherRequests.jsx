import { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import TeacherRequest from './TeacherRequest';
import Pagination from '../AllClasses/Pagination';

const TeacherRequests = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [teacherRequests, setTeacherRequests] = useState([]);

    useEffect(() => {
        loadTeacherRequests();
    }, []);

    const loadTeacherRequests = async () => {
        const res = await axiosSecure.get('/teacherRequests');
        setTeacherRequests(res.data);
    };

    const handleReqApprove = async (id) => {
        const res = await axiosSecure.put(`/teacherRequests/approve/${id}`);
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Request has been approved.',
            });
            loadTeacherRequests();
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to approve the request.',
            });
        }
    };

    const handleReqReject = async (id) => {
        const res = await axiosSecure.put(`/teacherRequests/reject/${id}`);
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Request has been rejected.',
            });
            loadTeacherRequests();
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to reject the request.',
            });
        }
    };



    const pageSize = 10;
    const indexOfLastCourse = currentPage * pageSize;
    const indexOfFirstCourse = indexOfLastCourse - pageSize;
    const currentTeacherRequests = teacherRequests.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div className='p-20'>
            <h2 className="text-4xl text-slate-800 font-bold text-center mb-5 ">Teacher Requests</h2>
            <Table bordered className='bg-gray-600 text-lime-200'>
                <thead>
                    <tr className='text-amber-400'>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Experience</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Approve</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentTeacherRequests.map(req => <TeacherRequest key={teacherRequests._id} req={req} handleReqApprove={handleReqApprove} handleReqReject={handleReqReject}></TeacherRequest>)
                    }
                </tbody>
            </Table>

            <div className="flex justify-center mt-20">
                <Pagination itemsPerPage={pageSize} totalItems={teacherRequests.length} currentPage={currentPage} paginate={paginate}></Pagination>
            </div>
            
        </div>
    );
};

export default TeacherRequests;
