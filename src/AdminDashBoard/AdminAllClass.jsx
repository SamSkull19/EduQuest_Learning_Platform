import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const AdminAllClass = ({ cls, handleClassApprove, handleClassReject }) => {
    const navigate = useNavigate();
    const { name, image, shortdescription, email, title } = cls;
    return (
        <tr className='text-sm font-medium'>
            <td>{title}</td>
            <td><img src={image} alt={title} className="w-8 h-8 rounded-full" /></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{shortdescription}</td>
            <td className='flex flex-col gap-2 justify-center'>
                <Button
                    className='bg-green-700 text-white'
                    onClick={() => handleClassApprove(cls._id)}
                    disabled={cls.status === 'approved'}
                >
                    Approve
                </Button>
                <Button
                    className='bg-red-700 text-white'
                    onClick={() => handleClassReject(cls._id)}
                    disabled={cls.status === 'rejected'}
                >
                    Reject
                </Button>
                <Button
                    className='bg-blue-700 text-white'
                    onClick={() => navigate(`/dashboard/allClasses/${cls._id}`)}
                    disabled={cls.status !== 'approved'}
                >
                    See Progress
                </Button>
            </td>
        </tr>
    );
};

AdminAllClass.propTypes = {
    cls: PropTypes.object.isRequired,
    handleClassApprove: PropTypes.func.isRequired,
    handleClassReject: PropTypes.func.isRequired,
}

export default AdminAllClass;