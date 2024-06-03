import { FaGraduationCap } from "react-icons/fa6";
import { GrResources } from "react-icons/gr"; import { GrCertificate } from "react-icons/gr"; import { GiTeacher } from "react-icons/gi";



const OurFacilities = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-10 ml-5 md:ml-0'>
                <h2 className='text-5xl font-bold'>Our Facilities</h2>
                <p className='text-xl font-medium mt-5 text-slate-500 text-center'>Our Facilities offer state-of-the-art resources and comfortable environments conducive to optimal learning experiences. From modern classrooms equipped with the latest technology to extensive libraries and recreational spaces, we ensure a supportive and enriching educational environment for all.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center pl-16 md:pl-0 lg:pl-28 py-16 rounded-full bg-amber-900">
                <div>
                    <div className="card w-96 bg-yellow-500 shadow-xl border border-black">
                        <div className="card-body">
                            <figure className="text-9xl"><FaGraduationCap /></figure>
                            <h2 className="card-title text-4xl">Trending Course</h2>
                            <p className="text-white text-xs">Our Trending Course explores the latest advancements and emerging trends in specific field or industry, providing valuable insights and practical skills to stay ahead in a rapidly evolving landscape. Join us to explore cutting-edge topics and future-proof your career.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card w-96 bg-green-500 shadow-xl border border-black">
                        <div className="card-body">
                            <figure className="text-9xl"><GrResources /></figure>
                            <h2 className="card-title text-4xl">Course Resources</h2>
                            <p className="text-white text-xs">Our Course Resources encompass a comprehensive array of materials meticulously curated to enhance your learning journey. From interactive tutorials and textbooks to supplementary videos and real-world case studies.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card w-96 bg-orange-600 shadow-xl border border-black">
                        <div className="card-body">
                            <figure className="text-9xl"><GrCertificate /></figure>
                            <h2 className="card-title text-4xl">Certification</h2>
                            <p className="text-white text-xs">Our Certification program offers validation of your skills and knowledge in different field or subject area, recognized by industry professionals and employers worldwide. Gain a competitive edge in your career with our accredited certification.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card w-96 bg-blue-600 shadow-xl border border-black">
                        <div className="card-body">
                            <figure className="text-9xl"><GiTeacher /></figure>
                            <h2 className="card-title text-4xl">Certified Teacher</h2>
                            <p className="text-white text-xs">Our Certified Teacher program equips educators with the necessary skills, knowledge, and credentials to excel in the classroom. Through rigorous training, mentorship, and assessment, we ensure our teachers meet the highest standards of excellence in education.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurFacilities;