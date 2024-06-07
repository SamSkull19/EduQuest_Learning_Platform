import FeedBackShows from "../FeedBack/FeedBackShows";
import Banner from "./Banner";
import BecomeInstructor from "./BecomeInstructor";
import CourseHighlight from "./CourseHighlight";
import OurFacilities from "./OurFacilities";
import OurPartner from "./OurPartner";
import OurProgram from "./OurProgram";
import Stats from "./Stats";

const Home = () => {
    
    return (
        <>
            <div className='bg-teal-800'>
                <div className="max-w-[1170px] mx-auto pt-5">
                    <div className='bg-cover bg-center h-[500px] rounded-2xl'>
                        <div className="absolute h-[500px] w-[1170px] bg-black opacity-50 rounded-2xl"></div>
                        <Banner></Banner>
                    </div>
                    <div className='h-[50px]'></div>
                </div>
            </div>

            <div className="max-w-[1170px] mx-auto pt-5">
                <OurPartner></OurPartner>
                <OurProgram></OurProgram>
                <CourseHighlight></CourseHighlight>
                <Stats></Stats>
                <FeedBackShows></FeedBackShows>
                <BecomeInstructor></BecomeInstructor>
                <OurFacilities></OurFacilities>
            </div>
        </>
    );
};

export default Home;