"use client";
import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#2E2E30] text-white flex items-center justify-between px-4 py-2 fixed w-full z-50 shadow-md">
      <div className="flex items-center space-x-2">
        <Tooltip title="Collapse Sidebar" arrow>
          <IconButton sx={{ color: "white" }} onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Image src={"/asanalogo.svg"} width={100} height={50} alt="logo" />
      </div>

      <div className="flex-1 mx-4 max-w-80 hidden lg:block  ">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#565557] text-gray-400 rounded-full px-4 py-1 focus:outline-white"
        />
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-yellow-400 bg-gray-800 px-3 py-1 rounded-full text-sm hidden lg:flex">
          14 days left in trial
        </span>
        <button className="text-gray-900 bg-yellow-500 px-4 py-1 rounded-md text-sm hidden lg:flex">
          Add billing info
        </button>
        <Tooltip title="Ravindra Raghav" arrow>
          <div className="p-2 cursor-pointer rounded-full bg-pink-500 flex items-center justify-center text-xs font-light">
            RK
          </div>
        </Tooltip>
      </div>
    </header>
  );
};

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={`fixed top-14 left-0 h-[calc(100vh-3rem)] bg-[#2E2E30] text-white shadow-md transition-all border-r pb-8 border-gray-700 duration-300 z-40 ${
        isCollapsed ? "w-16" : "w-56"
      }`}
    >
      <ul className="mt-4 space-y-4 px-4 border-b pb-8 border-gray-700">
        <li className="flex items-center gap-4 px-2 py-1 mt-1  transition-colors duration-300 transform rounded-md hover:bg-[#3D3E40]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          {!isCollapsed && <span className="text-sm font-semibold">Home</span>}
        </li>
        <li className="flex items-center gap-4 px-2 py-1 mt-1 bg-[#454547] transition-colors duration-300 transform rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {!isCollapsed && <span className="text-sm font-semibold">Files</span>}
        </li>
        <li className="flex items-center gap-4 px-2 py-1 mt-1  transition-colors duration-300 transform rounded-md hover:bg-[#3D3E40]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          {!isCollapsed && (
            <span className="text-sm font-semibold">Settings</span>
          )}
        </li>
      </ul>
    </div>
  );
};

const AppLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div
          className={`flex-1 p-8 transition-all duration-300 ${
            isSidebarCollapsed ? "ml-16" : "ml-64"
          } mt-16`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
