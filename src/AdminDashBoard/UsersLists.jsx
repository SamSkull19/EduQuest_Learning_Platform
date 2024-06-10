import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import UsersList from './UsersList';
import Swal from 'sweetalert2';
import Pagination from '../AllClasses/Pagination';
// import Swal from 'sweetalert2';


const UsersLists = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axiosSecure.get('/userList');
        setUsers(res.data);
    };

    const makeAdmin = async (userId) => {
        const res = await axiosSecure.put(`/userList/${userId}`);
        console.log(userId);
        if (res.status === 200) {
            setUsers(users.map(user => {
                if (user._id === userId) {
                    return { ...user, isAdmin: true };
                }
                return user;
            }));

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'User has been made an admin.',
            });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to make user an admin.',
            });
        }
    };


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const usersFinal = users.filter(user =>
        (user.displayName && user.displayName.toLowerCase().includes(searchQuery.toLowerCase())) || (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const indexOfLastCourse = currentPage * pageSize;
    const indexOfFirstCourse = indexOfLastCourse - pageSize;
    const currentUsers = usersFinal.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="flex items-center justify-center">
                <input type="text" placeholder="Search by Job Title" value={searchQuery} onChange={handleSearchChange} className="input input-bordered mb-4 bg-stone-500 w-[350px]" />
            </div>
            <Table striped bordered hover className='mt-10 font-bold bg-cyan-400 text-teal-800'>
                <thead>
                    <tr className='text-lg font-bold text-orange-800'>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Make Admin</th>
                        <th>User Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.map(user => <UsersList key={user.id} user={user} makeAdmin={makeAdmin}></UsersList>)
                    }
                </tbody>
            </Table>
            <div className="flex justify-center mt-20">
                <Pagination itemsPerPage={pageSize} totalItems={usersFinal.length} currentPage={currentPage} paginate={paginate}></Pagination>
            </div>
        </div>
    );
};

export default UsersLists;