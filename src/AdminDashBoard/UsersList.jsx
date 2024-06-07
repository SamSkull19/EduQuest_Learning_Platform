import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


const UsersList = ({ user, makeAdmin }) => {
    const { displayName, email, _id, photoURL, isAdmin } = user;
    return (
        <tr className='text-base font-medium'>
            <td>{displayName ? displayName : 'N/A'}</td>

            <td>{email ? email : 'N/A'}</td>

            <td>
                {
                    !isAdmin ? (
                        <Button className='bg-orange-600 text-white' onClick={() => makeAdmin(_id)}> Make Admin </Button>
                    ) : (
                        <Button className='bg-gray-400 text-gray-700' disabled>Admin</Button>
                    )
                }
            </td>

            <td>
                <img src={photoURL ? photoURL : 'N/A'} className='w-14 h-14 rounded-full' alt={displayName} />
            </td>
        </tr>
    );
};
UsersList.propTypes = {
    user: PropTypes.object.isRequired,
    makeAdmin: PropTypes.func.isRequired,
}
export default UsersList;