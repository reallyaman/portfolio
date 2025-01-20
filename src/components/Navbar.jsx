import logo from "../assets/ApLogo.png";
import { FaLinkedin } from "react-icons/fa";
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
        <a
          href="https://www.linkedin.com/in/aman-pandey-275431203"
          target="_blank"
        >
          <FaLinkedin className=" hover:text-[#0077B5]" />
        </a>

        <a
          href="https://github.com/reallyaman?tab=repositories"
          target="_blank"
        >
          <FaGithub className=" hover:text-[#fafbfc]" />
        </a>

        <a href="https://www.instagram.com/reallyamann/#" target="_blank">
          <FaInstagram className=" hover:text-[#c13584]" />
        </a>

        <a href="">
          <FaSquareXTwitter className=" hover:text-[#000000] hover:bg-white" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
