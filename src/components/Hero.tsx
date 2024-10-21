import { FaMapMarkerAlt } from 'react-icons/fa';
import Heroimg from '../assets/images/Food/restauranfood.jpg'

const Hero = () => {
    return (
        <>
        <div className=" relative bg-[#4c8d48] h-[30em] text-[#ffffff] font-markazi mt-4 overflow-visible">

            <div className="flex flex-col pt-20 pl-80">
              <div className="text-7xl">Hello Kitchen</div>

              <div className="flex flex-row items-center mt-2">
                    <FaMapMarkerAlt className="h-8 w-8 text-white mr-2" />
                    <div className="text-5xl">Chicago</div>
                </div>

                <div className="text-3xl text-justify w-2/5 mt-4">
                A renowned enterprise known for its exceptional dining experience and high reputation in the heart of Chicago.
                </div>

                <div>
                <button className="mt-6 px-8 py-4 bg-[#ffffff] text-[#4c8d48] font-bold text-2xl rounded-full shadow-md hover:bg-[#4c8d48] hover:text-[#ffffff] transition-all duration-300">
                Reserve a Table
                </button>
                </div>

              </div>
              <img src={Heroimg} className="absolute top-[10%] left-[60%] w-[30%] h-[120%] object-cover z-0 rounded-3xl" alt="Hero" />
        </div>

        </>



    );
};

export default Hero;

{/* <div className="w-2/6">
<div className="text-7xl mt-4">Hello Kitchen</div>
<div className="text-5xl flex items-center mt-2">
    <FaMapMarkerAlt className="h-8 w-8 text-white mr-2" />
    Chicago
</div>
<div className="text-3xl text-justify w-3/5 mt-2">
    A renowned enterprise known for its exceptional dining experience and high reputation in the heart of Chicago.
</div>
</div> */}