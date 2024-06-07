import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


const UsersList = ({ user, makeAdmin }) => {

    return (
        <tr className='text-base font-medium'>
            <td className='border-2 border-black'>{user.displayName ? user.displayName : 'N/A'}</td>

            <td className='border-2 border-black'>{user.email ? user.email : 'N/A'}</td>

            <td className='border-2 border-black'>
                {
                    !user.isAdmin ? (
                        <Button className='bg-orange-600 text-white' onClick={() => makeAdmin(user._id)}> Make Admin </Button>
                    ) : (
                        <Button className='bg-gray-400 text-gray-700' disabled>Admin</Button>
                    )
                }
            </td>

            <td className='border-2 border-black'>
                <img src={user.photoURL ? user.photoURL : 'N/A'} className='w-14 h-14 rounded-full' alt={user.displayName} />
            </td>
        </tr>
    );
};
UsersList.propTypes = {
    user: PropTypes.object.isRequired,
    makeAdmin: PropTypes.func.isRequired,
}
export default UsersList;