import PropTypes from 'prop-types';
const MyClasses = ({ course }) => {
    
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-teal-700 p-4 text-stone-200">
            <img className="w-full h-48 object-cover" src={course.course.image} alt={course.course.title} />
            <div className="py-5">
                <div className="font-bold text-xl mb-2">{course.course.title}</div>
                <p className="text-base text-amber-200">
                    {course.course.name}
                </p>
            </div>
            <div className="pb-2">
                <button className="bg-amber-700 hover:bg-orange-200 text-white font-bold py-2 w-full rounded-xl">Continue</button>
            </div>
        </div>
    );
};

MyClasses.propTypes = {
    course: PropTypes.object.isRequired,
}
export default MyClasses;