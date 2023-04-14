import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoAirplaneSharp } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import { TbLeaf } from "react-icons/tb";

export default function Feature() {
  return (
    <div
      id="features"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Our awesome features
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            Dessert is not just any ordinary certification app. Its unique
            features set it apart from other traditional certification systems.
            From decentralized storage of records to easy verification of
            credentials, Dessert has it all.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <AiOutlineEye className="w-7 h-7 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Transparent</h6>
          <p className="mb-3 text-sm text-gray-900">
            Users can see the entire history of a certification.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Creations
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Updates
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Deletions
            </li>
          </ul>
          <a
            href="#about-us"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <IoAirplaneSharp className="w-7 h-7 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Accessible</h6>
          <p className="mb-3 text-sm text-gray-900">
            Access your certificates, whenever and wherever you want.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Real-time
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Remotely
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Worldwide
            </li>
          </ul>
          <a
            href="#about-us"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <VscVerifiedFilled className="w-7 h-7 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Efficient</h6>
          <p className="mb-3 text-sm text-gray-900">
            Remove the unnecessary bureaucracy everywhere.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              No paperwork
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Instant
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Foolproof
            </li>
          </ul>
          <a
            href="#about-us"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <TbLeaf className="w-7 h-7 text-deep-purple-accent-400" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Sustainable</h6>
          <p className="mb-3 text-sm text-gray-900">
            Doing our part by embracing eco-friendly practices.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Listen
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Communicate
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
              </span>
              Run
            </li>
          </ul>
          <a
            href="#about-us"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
