import Banner from "./Banner";

const Home = () => {
    return (
        <div className='bg-teal-800'>
            <div className="max-w-[1170px] mx-auto pt-5">
                <div className='bg-cover bg-center h-[500px] rounded-2xl'>
                    <div className="absolute h-[500px] w-[1170px] bg-black opacity-50 rounded-2xl"></div>
                    <Banner></Banner>
                </div>
                <div className='h-[50px]'></div>
            </div>
        </div>
    );
};

export default Home;