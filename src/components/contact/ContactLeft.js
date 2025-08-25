import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0A0118] to-[#140033] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <div className='lgl: w-full'>
      <img
        className="lgl:w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#fb0052]">Jyoti Gupta</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Creative Frontend Developer specializing in React.js, with a strong eye for design and user experience. I excel at building responsive, high-performance web applications using modern tools like React, Redux, and Tailwind CSS. Passionate about translating complex ideas into intuitive interfaces, I focus on clean code, reusability, and scalability. Let's craft engaging user experiences—one component at a time!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9987707873</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jyoti23147@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-[#fb0052]">Find me in</h2>
        <div className="flex gap-4">
          {/* <span className="contactIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white" onClick={()=>window.open('https://twitter.com/Jyoti', '_blank')}>
            <FaTwitter size={30}/>
          </span> */}
          <span className="contactIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white" onClick={()=>window.open('https://www.linkedin.com/in/jyoti-gupta-17a6601b3', '_blank')}>
            <FaLinkedinIn size={30}/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft