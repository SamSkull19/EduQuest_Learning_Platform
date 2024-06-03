import { SiSkillshare } from "react-icons/si";
import { SiDatacamp } from "react-icons/si";
import { SiUdemy } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";



const OurPartner = () => {
    return (
        <div className="my-20 roboto">
            <h1 className="text-6xl font-bold text-center mb-5">Our Partners and Collaborators</h1>
            <p className="text-center mb-10">At EduQuest, our partners and collaborators are integral to our mission. By joining forces with renowned educational institutions and industry leaders, we bring cutting-edge content and real-world expertise to empower learners worldwide.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 text-9xl gap-8 justify-between">
                <div className="flex flex-col items-center">
                    <SiUdemy />
                    <p className="text-2xl mt-2 font-semibold">Udemy</p>
                </div>

                <div className="flex flex-col items-center">
                    <SiCoursera />
                    <p className="text-2xl mt-2 font-semibold">Coursera</p>
                </div>

                <div className="flex flex-col items-center">
                    <SiDatacamp />
                    <p className="text-2xl mt-2 font-semibold">DataCamp</p>
                </div>

                <div className="flex flex-col items-center">
                    <SiSkillshare />
                    <p className="text-2xl mt-2 font-semibold">SkillShare</p>
                </div>

                <div className="flex flex-col items-center">
                    <SiCisco />
                    <p className="text-2xl mt-2 font-semibold">Cisco</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaGithubSquare />
                    <p className="text-2xl mt-2 font-semibold">Github</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaFreeCodeCamp />
                    <p className="text-2xl mt-2 font-semibold">FreeCodeCamp</p>
                </div>
            </div>

        </div>
    );
};

export default OurPartner;