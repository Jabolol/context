"use client";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

export default function Card({ ...props }) {
  const [info, setInfo] = useState<
    {
      results: [
        {
          gender: string;
          name: { "title": "Miss"; "first": "درسا"; "last": "کامروا" };
          location: {
            street: { "number": 7408; "name": "پارک شریعتی" };
            city: "یزد";
            state: "خراسان جنوبی";
            country: "Iran";
            postcode: 19700;
            coordinates: { "latitude": "17.4247"; "longitude": "116.5561" };
            timezone: {
              offset: "-5:00";
              description: "Eastern Time (US & Canada), Bogota, Lima";
            };
          };
          email: "drs.khmrw@example.com";
          phone: "085-18831355";
          cell: "0995-712-1976";
          picture: {
            large: "https://randomuser.me/api/portraits/women/76.jpg";
            medium: "https://randomuser.me/api/portraits/med/women/76.jpg";
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg";
          };
          nat: "IR";
        },
      ];
      info: {};
    }
  >();
  useEffect(() => {
    fetch("https://randomuser.me/api/").then((r) => r.json()).then((d) =>
      setInfo(d)
    );
  }, []);
  return (info
    ? (
      <>
        <div
          {...props}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
        >
          <div className="flex justify-end px-4 pt-4">
            <RxCross1 className="w-8 h-auto inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" />
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={info?.results[0].picture.medium}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              {info.results[0].name.first} {info.results[0].name.last}
            </h5>
            <span className="text-sm text-gray-500">
              {info.results[0].location.city}
              {", "}
              {info.results[0].location.country}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-deep-purple-accent-400 rounded-lg hover:bg-deep-purple-accent-500 focus:ring-4 focus:outline-none focus:ring-deep-purple-accent-400"
              >
                View certificates
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </>
    )
    : <div key={Math.random().toString()}></div>);
}
