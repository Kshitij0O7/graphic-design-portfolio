import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 grid-rows-5 gap-1 bg-black p-2 rounded-xl h-screen">
        {/* Top Quote */}
        <div className="col-span-1 row-span-2 bg-darkBlue text-lightBlue p-6 rounded-lg shadow-md flex-row items-center justify-center text-left text-xl font-bold">
          <div className="text-2xl p-1">
          Design is the silent ambassador of your brand.
          </div>
          <div>
            <span className="text-lightBlue italic font-light ml-2">
              ~ Paul Rand
            </span>
          </div>
        </div>
        
        {/* About Me Section */}
        <div className="relative col-span-2 row-span-1 bg-lightBlue p-6 rounded-lg shadow-md">
          <h2 className="text-darkBlue font-bold text-4xl">About Me</h2>
          <div className=" absolute right-0 bottom-0"><IoIosArrowForward size={100}/></div>
        </div>

        {/* Areas of Expertise */}
        <div className="relative col-span-2 row-span-1 bg-lightBlue p-6 rounded-lg shadow-md">
        <h2 className="text-darkBlue font-bold text-xl flex items-center">
          Areas Of Expertise
          </h2>
          <div className=" absolute right-0 bottom-0"><IoIosArrowForward size={100}/></div>
          {/* <ArrowRightIcon/> */}
        </div>

        <div className="col-span-3 bg-white rounded-xl"></div>

        <div className="col-span-1 row-span-1 bg-lightBlue rounded-lg text-3xl p-4 flex">
          <div>Get my Resume</div>
          <MdOutlineFileDownload size={100}/>
        </div>
        {/* Profile Image */}
        <div className="col-span-3 relative row-span-3 bg-darkBlue text-center rounded-lg shadow-md flex justify-center items-center">
          
            <h2 className="text-lightBlue absolute left-0 bottom-0 font-bold text-6xl text-left p-1">Angel <br/>Bhutani</h2>

          <div className="absolute right-0">
            <Image
              src="/file.svg" // Replace with your profile image URL
              alt="Angel Bhutani"
              width={100}
              height={500}
              className="rounded-full mb-4"
            />
          </div>
        </div>

        {/* NEXT Challenge */}
        <div className="col-span-1 row-span-2 bg-lightBlue p-4 rounded-lg shadow-md">
          <h2 className="text-darkBlue font-bold text-3xl text-left">Up for the Next Challenge</h2>
        </div>

        {/* Pixel Poet*/}
        <div className="col-span-2 relative row-span-2 bg-darkBlue p-6 rounded-lg shadow-md">
          <h2 className="text-lightBlue font-bold text-4xl">Pixel Poet</h2>
          <div className=" absolute right-0 bottom-0"><IoIosArrowForward size={100}/></div>
        </div>

        {/* Graphic Projects */}
        <div className="col-span-2 relative row-span-2 bg-lightBlue p-6 rounded-lg shadow-md">
          <h2 className="text-darkBlue font-bold text-4xl">Graphic Projects</h2>
          <div className=" absolute right-0 bottom-0"><IoIosArrowForward size={100}/></div>
        </div>

        {/* UX Projects */}
        <div className="col-span-3 relative row-span-2 bg-lightBlue p-6 rounded-lg shadow-md">
          <h2 className="text-darkBlue font-bold text-4xl">UX Projects</h2>
          <div className=" absolute right-0 bottom-0"><IoIosArrowForward size={100}/></div>
        </div>

        {/* Footer Box */}
        <div className="col-span-2 row-span-1 bg-darkBlue text-lightBlue p-6 rounded-lg shadow-md text-center font-light">
          Chasing sunsets | Forever curious | Books keep me grounded | Coffee fuels my creativity
        </div>

        {/* Quote Box */}
        <div className="col-span-2 row-span-1 bg-lightBlue p-6 rounded-lg shadow-md">
          <blockquote className="italic text-darkBlue">
            "The brochure was very attractive, and lots of people were
            complimenting it!"
          </blockquote>
          <p className="text-sm text-darkBlue font-light mt-2">
            ~ Pyreign Technologies
          </p>
        </div>

        {/* Drop a line */}
        <div className="col-span-1 relative row-span-1 bg-lightBlue p-4 rounded-lg shadow-md">
          <h2 className="text-darkBlue font-bold text-3xl text-left">Drop me a Line</h2>
          <div className=" absolute right-0 bottom-0"><IoIosArrowForward size={50}/></div>
        </div>

      </div>
    </div>
  );
}
