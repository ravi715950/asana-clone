import { Tooltip } from "@mui/material";
import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Tooltip title="Ravindra Raghav" arrow>
          <div className="w-8 h-8 cursor-pointer rounded-full bg-pink-500 flex items-center justify-center text-xs font-light">
            RK
          </div>
        </Tooltip>
        <h1 className="font-bold">My Tasks</h1>
        <Tooltip title="Actions">
          <KeyboardArrowDownIcon fontSize="large" />
        </Tooltip>
      </div>
      <div className="flex space-x-4 px-4 border-b border-gray-500">
        <button
          className="flex items-center space-x-2 border-b-2  px-2 py-2 mt-1  transition-colors duration-300 transform  hover:bg-[#3D3E40]"
          aria-label="List"
        >
          <FormatListBulletedIcon fontSize="small" />
          <span className="text-xs">List</span>
        </button>

        <button
          className="flex items-center opacity-55 hover:opacity-100 space-x-2 px-2 py-1 mt-1  transition-colors duration-300 transform  hover:bg-[#3D3E40]"
          aria-label="Board"
        >
          <SpaceDashboardIcon fontSize="small" />
          <span className="text-xs">Board</span>
        </button>

        <button
          className="flex items-center opacity-55 hover:opacity-100 space-x-2 px-2 py-1 mt-1  transition-colors duration-300 transform  hover:bg-[#3D3E40]"
          aria-label="Calendar"
        >
          <CalendarMonthIcon fontSize="small" />
          <span className="text-xs">Calendar</span>
        </button>

        <button
          className="flex items-center opacity-55 hover:opacity-100 space-x-2 px-2 py-1 mt-1  transition-colors duration-300 transform  hover:bg-[#3D3E40]"
          aria-label="Files"
        >
          <AttachFileIcon fontSize="small" />
          <span className="text-xs">Files</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
