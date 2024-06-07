import { useQuery } from "@tanstack/react-query";
import FeedBackShow from "./FeedBackShow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const FeedBackShows = () => {
    const { isPending, data: feedbacks } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: () =>
            fetch('http://localhost:5000/feedbacks').then((res) =>
                res.json(),
            ),
    })

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }
    console.log(feedbacks);

    return (
        <div className="max-w-[1170px] mx-auto my-20 pt-5 courseHighlights">
            <div className="mt-10 roboto mb-20">
                <h2 className="mb-6 text-5xl text-center font-extrabold">Feedbacks</h2>
                <p className="text-center text-xl mb-5 text-stone-700">EduQuest commitment to gathering feedbacks is commendable. It shows they value continuous improvement and strive to provide the best learning experience possible.</p>
                <div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}

                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                            effect: "fade"
                        }}

                        pagination={{ el: '.swiper-pagination', clickable: true }}

                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}

                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="swiper_container"
                    >


                        {feedbacks.map(feedback => (
                            <SwiperSlide key={feedback.id}>
                                <FeedBackShow feedback={feedback} />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow text-black">
                                <IoIosArrowDropleftCircle />
                            </div>
                            <div className="swiper-button-next slider-arrow text-black">
                                <IoIosArrowDroprightCircle />
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>

                </div>

            </div>
        </div>
    );
};

export default FeedBackShows;