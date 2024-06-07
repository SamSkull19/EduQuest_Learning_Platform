import PropTypes from 'prop-types';


const FeedBackShow = ({ feedback }) => {
    console.log(feedback);
    const { title, name, image } = feedback;

    return (
        <div className='bg-orange-200 rounded-3xl w-[370px] h-[580px] -z-10 border border-blue-950 p-5'>
            <div className=''>
                <img src={image} className='w-[340px] h-[340px] rounded-3xl mx-auto' alt="slide_image" />
            </div>
            <div className='p-7'>
                <h1 className='text-3xl font-bold text-teal-800'>{name}</h1>

                <h3 className='text-xl mt-2 text-stone-700 font-semibold'>{title}</h3>

                <h3 className='text-red-900 text-base mt-2'>{feedback.feedback}</h3>

            </div>
        </div>


    );
};

FeedBackShow.propTypes = {
    feedback: PropTypes.object.isRequired,
}

export default FeedBackShow;