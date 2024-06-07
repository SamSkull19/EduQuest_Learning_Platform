import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import UsersList from './UsersList';
import Swal from 'sweetalert2';
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

    return (
        <div>
            <div className="flex items-center justify-center">
                <input type="text" placeholder="Search by Job Title" value={searchQuery} onChange={handleSearchChange} className="input input-bordered mb-4 bg-stone-500 w-[350px]" />
            </div>
            <Table striped bordered hover className='border-2 border-red-950 mt-10'>
                <thead>
                    <tr className='text-lg font-bold text-black'>
                        <th className='border-2 border-black'>User Name</th>
                        <th className='border-2 border-black'>User Email</th>
                        <th className='border-2 border-black'>Make Admin</th>
                        <th className='border-2 border-black'>User Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersFinal.map(user => <UsersList key={user.id} user={user} makeAdmin={makeAdmin}></UsersList>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default UsersLists;