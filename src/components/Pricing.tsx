import { CgCheckO } from "react-icons/cg";
import { IoPeopleOutline, IoPersonOutline } from "react-icons/io5";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Transparent</span>
          </span>{" "}
          pricing. Pay as you grow.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Dessert&#39;s billing system is designed with simplicity and transparency
          in mind. Unlike traditional certification systems, there are no hidden
          fees or complicated payment structures.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Personal use
                </p>
                <p className="text-5xl font-extrabold">Free</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                <IoPersonOutline className="w-10 h-10 text-gray-600" />
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">
                    Unlimited lookups
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">
                    Unlimited certifications
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">
                    Limited integrations
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/list"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Start for free
            </a>
            <p className="text-sm text-gray-600">
              This tier is governed by the fair use policy. No billing will be
              done upon registering.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  For institutions
                </p>
                <p className="text-5xl font-extrabold">$10</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
                <IoPeopleOutline className="w-10 h-10 text-deep-purple-accent-400" />
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Features</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">
                    All from the free tier
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">
                    Access to all integrations
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">
                    Reporting and analytics
                  </p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">24/7 support</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">
                    <CgCheckO className="w-4 h-4 text-deep-purple-accent-400" />
                  </div>
                  <p className="font-medium text-gray-800">Custom branding</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/create"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <p className="text-sm text-gray-600">
              Billed monthly. Cancellation must be done at least 3 days prior to
              the renewal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
