import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const TeacherRequest = ({ req, handleReqApprove }) => {
    const {  _id, photoURL, userName, experienceLevel, title, jobCategory, status } = req;

    return (
        <tr>
            <td>{userName}</td>
            <td><img src={photoURL} alt={userName} className="w-14 h-14 rounded-full" /></td>
            <td>{experienceLevel}</td>
            <td>{title}</td>
            <td>{jobCategory}</td>
            <td>{status}</td>
            <td>
                <Button
                    color="success"
                    disabled={status !== 'pending'}
                    onClick={() => handleReqApprove(_id)}
                >
                    Approve
                </Button>
            </td>
            {/* <td>
                <Button
                    color="danger"
                    disabled={request.status !== 'pending'}
                    onClick={() => handleReject(request._id)}
                >
                    Reject
                </Button>
            </td> */}
        </tr>
    );
};

TeacherRequest.propTypes = {
    req: PropTypes.object.isRequired,
    handleReqApprove: PropTypes.func.isRequired,
}

export default TeacherRequest;