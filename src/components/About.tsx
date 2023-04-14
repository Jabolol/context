import Image from "next/image";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default function About() {
  return (
    <div
      id="about-us"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Get to know us
              <br className="hidden md:block" />
              a little{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  bit better
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Developed by <code>Web3</code> advocates and{" "}
              <code>TypeScript</code>{" "}
              lovers, Dessert is the ideal platform for students and
              universities alike, amongst many others. Having certificates
              centralized in a decentralized registry eases verification
              greatly.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            About us
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
                </span>
                Privacy advocates
              </li>
              <li className="flex">
                <span className="mr-1">
                  <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
                </span>
                Engineering students
              </li>
              <li className="flex">
                <span className="mr-1">
                  <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
                </span>
                Tech passionates
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
                </span>
                Gym lovers
              </li>
              <li className="flex">
                <span className="mr-1">
                  <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
                </span>
                Java haters
              </li>
              <li className="flex">
                <span className="mr-1">
                  <HiOutlineArrowSmRight className="w-5 h-5 mt-px text-deep-purple-accent-400" />
                </span>
                Pancake eaters
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/stock.jpeg"
            alt="about us image"
            width={1260}
            height={750}
          />
        </div>
      </div>
    </div>
  );
}
