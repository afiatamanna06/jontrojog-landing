"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { navigationLinks } from "./NavigationLinks";
import { useAtom } from "jotai";
import darkModeAtom from "@/atoms/darkModeAtom";

function NavigationBar() {
  const [responsiveDisplay, setResponsiveDisplay] = useState("hidden");
  const [colorMode, toggleColorMode] = useAtom(darkModeAtom);

  const containerHeight =
    responsiveDisplay === "hidden" ? "h-min" : "h-full lg:h-min";

  return (
    <nav className={`fixed py-4 px-2 md:px-4 z-[99] w-full ${containerHeight}`}>
      <div
        className={`relative text-[1.025rem] flex flex-col lg:flex-row px-4 text-sm rounded-lg py-2 items-start lg:items-center bg-[#ffffff4f] w-full justify-between ${containerHeight}`}
      >
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-row items-center">
            <div>
              <Link href="/" passHref>
                <div className="flex flex-row items-center text-2xl cursor-pointer">
                  <div className="font-semibold tracking-wider">Jontrojog</div>
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
            <button
              type="button"
              onClick={() =>
                colorMode === "light"
                  ? toggleColorMode("dark")
                  : toggleColorMode("light")
              }
              className="rounded bg-black dark:bg-[#737DFE4f] p-[9px] text-white shadow-sm outline-0 focus-visible:outline-0"
            >
              {colorMode === "light" ? (
                <FiSun size={18} />
              ) : (
                <FiMoon size={18} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${responsiveDisplay} lg:flex flex-col lg:flex-row gap-4 lg:gap-4 items-start lg:items-center`}
        >
          {navigationLinks.map(({ name, path }) => (
            <Link href={path} key={name} passHref>
              <div
                className="font-medium min-w-[5.5rem] tracking-wider"
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
          <button className="bg-black tracking-wider text-white font-medium rounded min-w-[7.5rem] py-2 px-3">
            Contact Us
          </button>
          <button
            type="button"
            onClick={() =>
              colorMode === "light"
                ? toggleColorMode("dark")
                : toggleColorMode("light")
            }
            className="hidden lg:flex rounded bg-black dark:bg-[#737DFE4f] p-[9px] text-white shadow-sm outline-0 focus-visible:outline-0"
          >
            {colorMode === "light" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
