import { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import TeacherRequest from './TeacherRequest';

const TeacherRequests = () => {

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



    return (
        <div>
            <h2 className="text-2xl mb-4">Teacher Requests</h2>
            <Table bordered>
                <thead>
                    <tr>
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
                        teacherRequests.map(req => <TeacherRequest key={teacherRequests._id} req={req} handleReqApprove={handleReqApprove}></TeacherRequest>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default TeacherRequests;
