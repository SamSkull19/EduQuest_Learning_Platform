import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";


import '../App.css';

const Footer = () => {
    return (
        <div className="mt-10 max-w-[1170px] mx-auto">
            <footer className="footer p-10 bg-teal-800 roboto text-white">
                <aside >
                    <p className="text-sm"><span className="text-3xl font-extrabold flex items-center text-teal-300"> <LuBookOpenCheck className="mr-2" /> <p>EduQuest</p><br /><br /></span>Navigate Your Teaching Career Journey with EduQuest<br /><br />Embark on a quest to your dream career with <br />EduQuest, where opportunities await at every turn.</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-teal-200">Services</h6>
                    <a className="link link-hover">Teaching Access</a>
                    <a className="link link-hover">Enrollment</a>
                    <a className="link link-hover">Student Helpline</a>
                    <a className="link link-hover">Knowledge Gain</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-teal-200">Company</h6>
                    <p>Phone: +8801234567811</p>
                    <p>Email: info@EduQuest.com</p>
                    <p>Website: www.EduQuest.com</p>
                    <p>Address: 123 Craft Street, <br />Bajra, Sylhet</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-teal-200">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Copyright Policy</a>
                    <a className="link link-hover">Patent Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-teal-200">Social</h6>
                    <a className="link link-hover flex items-center"><FaFacebook /> <span className="ml-2">Facebook</span></a>
                    <a className="link link-hover flex items-center"><FaTwitter /> <span className="ml-2">Twitter</span></a>
                    <a className="link link-hover flex items-center"><FaLinkedin /> <span className="ml-2">Linkedin</span></a>
                    <a className="link link-hover flex items-center"><FaInstagram /> <span className="ml-2">Instagram</span></a>


                </nav>
            </footer>
            <div className="flex justify-center items-center pt-5 pb-5 bg-teal-400">
                <h1 className="w-4/6 text-center text-sm font-semibold text-teal-800">
                © EduQuest. All rights reserved. EduQuest is a registered trademark. Unauthorized use or reproduction of content, including but not limited to text, images, and logos, is strictly prohibited without prior written consent from EduQuest. </h1>
            </div>
        </div>
    );
};

export default Footer;