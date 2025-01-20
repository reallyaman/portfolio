import logo from '../assets/ApLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className=" mb-9 flex items-center justify-between py-6">
      <div className='class="flex flex-shrink-0 items-center"'>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className=" flex items-center justify-center gap-4 m-8 text-2xl">
        <FaLinkedin className=" hover:text-[#0077B5]" />
        <FaGithub className=" hover:text-[#fafbfc]" />
        <FaInstagram className=" hover:text-[#c13584]" />
        <FaSquareXTwitter className=" hover:text-[#000000] hover:bg-white" />
      </div>
    </nav>
  );
}

export default Navbar