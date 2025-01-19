import logo from '../assets/ApLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" mb-9 flex items-center justify-between py-6">
      <div className='class="flex flex-shrink-0 items-center"'>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className=" flex items-center justify-center gap-4 m-8 text-2xl">
        <FaLinkedin className=" hover:text-[#BF40BF]" />
        <FaGithub className=" hover:text-[#BF40BF]" />
        <FaInstagram className=" hover:text-[#BF40BF]" />
        <FaTwitterSquare className=" hover:text-[#BF40BF]" />
      </div>
    </nav>
  );
}

export default Navbar 