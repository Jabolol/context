import { TbLollipop } from "react-icons/tb";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="px-10 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <TbLollipop className="w-8 h-auto text-deep-purple-accent-400" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Dessert
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              The ultimate decentralized certification registry. Save all
              certifications securely and effectively in one place.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Need more info? Unsure about the benefits? Send us an email or
              call us, we will be eager to help.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              (+34) 621 012 004
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:hello@dessert.io"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              hello@dessert.io
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Carrer Al, Barcelona
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="/">
              <FiTwitter className="w-10 h-10 text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" />
            </a>
            <a href="/">
              <AiOutlineInstagram className="w-10 h-10 text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" />
            </a>
            <a href="/">
              <AiOutlineFacebook className="w-10 h-10 text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Share your career milestones with us! Do not forget to use hashtag
            {" "}
            <code>#dessert</code>.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Dessert. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/robots.txt"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              robots.txt
            </a>
          </li>
          <li>
            <a
              href="/humans.txt"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              humans.txt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
