"use client";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container mx-auto px-4 h-full py-2">
        <div className="flex items-center justify-between">
          <div className="header-logo">
            <Link href={"/"}>
              <Image
                className="w-16 h-16"
                src={logo}
                alt="yousef ahmed | frontend developer"
              />
            </Link>
          </div>
          <div className="header-links hidden md:flex">
            <ul className="flex items-center space-x-5">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={"/"}
                  className="text-xl"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={"/#about"}
                  className="text-xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={"/projects"}
                  className="text-xl"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={"/#contact"}
                  className="text-xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="header-talk-btn">
              <Button text={"Lets Talk"} to={"https://wa.me/201145667099"} />
            </div>
            <div className="header-baricon block md:hidden">
              <div
                className="w-10 h-10 border border-darkpurple flex items-center justify-center rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="510"
                  height="511"
                  fill="none"
                  viewBox="0 0 510 511"
                  id="menu"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M156 181H356V166H156V181zM228.983 256.352L355.999 256 355.957 241 228.941 241.352 228.983 256.352zM155.996 331H355.996V316H155.996V331z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="primary-header fixed z-[9999] h-screen bg-primary-black w-full top-0 left-0 p-14 sm:w-6/12 md:hidden">
            <div className="primary-header-close-icon flex justify-end">
              <div
                className="w-11 h-11 border border-darkpurple flex items-center justify-center rounded-full cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="x"
                >
                  <rect width="200" height="200" fill="none"></rect>
                  <line
                    x1="200"
                    x2="56"
                    y1="56"
                    y2="200"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                  ></line>
                  <line
                    x1="200"
                    x2="56"
                    y1="200"
                    y2="56"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                  ></line>
                </svg>
              </div>
            </div>
            <hr className="my-10" />
            <div className="primary-header-links">
              <ul className="flex flex-col items-start space-y-5">
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/"}
                    className="text-2xl font-bold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/#about"}
                    className="text-2xl font-bold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/projects"}
                    className="text-2xl font-bold"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/#contact"}
                    className="text-2xl font-bold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="my-10" />
            <div className="primary-header-contact-links">
              <ul className="flex flex-row items-start space-x-5">
                <li>
                  <Link href={"https://github.com/yousef1242"} target="_blank">
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="47"
                      viewBox="0 0 48 47"
                      id="github"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g fill="#fff" transform="translate(-700 -560)">
                          <path d="M723.999 560C710.745 560 700 570.787 700 584.097c0 10.644 6.876 19.675 16.414 22.861 1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.663-3.525-2.663-3.525-2.18-1.495.165-1.465.165-1.465 2.407.17 3.674 2.483 3.674 2.483 2.143 3.683 5.618 2.62 6.986 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.015-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.239 6.377 1.538 1.685 2.467 3.835 2.467 6.466 0 9.256-5.611 11.293-10.957 11.89.86.744 1.629 2.213 1.629 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C741.13 603.763 748 594.738 748 584.097c0-13.31-10.746-24.097-24.001-24.097"></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={"https:Wa.me/201145667099"} target="_blank">
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 100 100"
                      viewBox="0 0 100 100"
                      id="whatsapp"
                    >
                      <g>
                        <path
                          fill="#f1f1f1"
                          fill-rule="evenodd"
                          d="M82.773,17.048c-38.434-37.321-98.728,8.848-72.606,55.645c-0.001,0-6.545,23.896-6.545,23.896
				                l24.455-6.412C74.864,114.914,119.655,54.965,82.773,17.048z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#66e066"
                          fill-rule="evenodd"
                          d="M50.143,88.745c-7.593,0.027-14.974-2.253-21.34-6.295c0,0-14.796,3.879-14.796,3.879l3.95-14.421
				                c-4.438-6.577-6.941-14.291-6.907-22.275C10.98,15.084,53.475-2.531,77.796,22.018C102.312,46.358,84.702,88.821,50.143,88.745z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#f1f1f1"
                          fill-rule="evenodd"
                          d="M71.585,59.476c-1.175-0.588-6.953-3.431-8.03-3.823c-1.077-0.392-1.861-0.588-2.644,0.589
				                c-0.784,1.176-3.034,3.822-3.72,4.605c-0.685,0.785-1.371,0.883-2.546,0.295c-2.539,0.339-15.564-10.676-15.988-13.97
				                c-0.685-1.175-0.073-1.812,0.516-2.398c1.023-1.123,2.318-2.535,2.937-4.018c0.392-0.785,0.196-1.471-0.098-2.059
				                c-0.294-0.588-2.578-6.4-3.623-8.723c-0.88-1.957-1.807-1.996-2.644-2.031c-1.983,0.031-3.518-0.484-5.386,1.443
				                c-7.004,6.741-3.792,16.214,0.685,21.955c0.587,0.784,8.13,13.028,20.075,17.738c9.927,3.915,11.947,3.136,14.102,2.94
				                c2.155-0.196,6.953-2.842,7.932-5.586c0.979-2.744,0.979-5.096,0.686-5.587C73.544,60.358,72.76,60.064,71.585,59.476z"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"mailto:yousefahmedelshahed@gmail.com"}
                    target="_blank"
                  >
                    <svg
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 193"
                    >
                      <path
                        fill="#4285f4"
                        d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
                      />
                      <path
                        fill="#34a853"
                        d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
                      />
                      <path
                        fill="#ea4335"
                        d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
                      />
                      <path
                        fill="#fbbc04"
                        d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
                      />
                      <path
                        fill="#c5221f"
                        d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
