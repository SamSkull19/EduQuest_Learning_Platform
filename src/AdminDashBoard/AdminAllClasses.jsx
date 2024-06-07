import { useQuery } from '@tanstack/react-query';
import { Table } from 'reactstrap';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import AdminAllClass from './AdminAllClass';

const AdminAllClasses = () => {

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
                        classes.map(cls => <AdminAllClass key={classes._id} cls={cls} handleClassApprove={handleClassApprove} handleClassReject={handleClassReject}></AdminAllClass> )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AdminAllClasses;
