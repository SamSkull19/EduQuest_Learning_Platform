import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const TeacherRequest = ({ req, handleReqApprove, handleReqReject }) => {
    const {  _id, images, userName, experienceLevel, title, jobCategory, status } = req;

    return (
        <tr>
            <td>{userName}</td>
            <td><img src={images} alt={userName} className="w-7 h-7 rounded-full" /></td>
            <td>{experienceLevel}</td>
            <td>{title}</td>
            <td>{jobCategory}</td>
            <td>{status}</td>
            <td>
                <Button
                    className='bg-green-700 text-orange-200'
                    disabled={status !== 'pending'}
                    onClick={() => handleReqApprove(_id)}
                >
                    Approve
                </Button>
            </td>
            <td>
                <Button
                    className='bg-orange-800 text-orange-200'
                    disabled={status !== 'pending'}
                    onClick={() => handleReqReject(_id)}
                >
                    Reject
                </Button>
            </td> 
        </tr>
    );
};

TeacherRequest.propTypes = {
    req: PropTypes.object.isRequired,
    handleReqApprove: PropTypes.func.isRequired,
    handleReqReject: PropTypes.func.isRequired,
}

export default TeacherRequest;