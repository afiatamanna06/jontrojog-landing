"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { navigationLinks } from "./NavigationLinks";

function NavigationBar() {
  const [responsiveDisplay, setResponsiveDisplay] = useState("hidden");

  const containerHeight =
    responsiveDisplay === "none" ? "h-min" : "h-full lg:h-min";

  return (
    <nav className={`fixed py-4 px-2 md:px-4 z-[99] w-full ${containerHeight}`}>
      <div
        className={`relative flex flex-col lg:flex-row px-4 text-sm rounded-lg py-2 items-start lg:items-center bg-[#ffffff4f] w-full justify-between ${containerHeight}`}
      >
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-row items-center">
            <div>
              <Link href="/" passHref>
                <div className="flex flex-row items-center text-xl cursor-pointer">
                  <div className="font-semibold">Jontrojog</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden items-center gap-4">
            <div
              onClick={() => {
                responsiveDisplay === "hidden"
                  ? setResponsiveDisplay("flex")
                  : setResponsiveDisplay("hidden");
              }}
            >
              <FiMenu size={22} />
            </div>
          </div>
        </div>
        <div
          className={`${responsiveDisplay} lg:flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center`}
        >
          {navigationLinks.map(({ name, path }) => (
            <Link href={path} key={name} passHref>
              <div
                className="text-sm min-w-[5rem]"
                onClick={() => {
                  responsiveDisplay === "flex"
                    ? setResponsiveDisplay("none")
                    : setResponsiveDisplay("flex");
                }}
              >
                {name}
              </div>
            </Link>
          ))}
          <button className="bg-black text-white rounded-sm min-w-[7rem] py-2 px-2">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
