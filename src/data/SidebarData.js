import React from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosWallet } from "react-icons/io";
import { IoIosSwap } from "react-icons/io";
import { IoMdCalculator } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";

const SidebarData = [
        { name: "Dashboard", path: "/", exact: "true", icon: <RiDashboardFill /> },
        { name: "Portfolio", path: "/porfolio", icon: <IoIosWallet /> },
        { name: "Transactions", path: "/transactions", icon: <IoIosSwap /> },
        { name: "Calculator", path: "/calculator", icon: <IoMdCalculator /> },
        { name: "Watchlist", path: "/wachlist", icon: <IoIosTrendingUp /> },
        { name: "News", path: "/news", icon: <IoMdPaperPlane /> },
        { name: "Settings", path: "/settings", icon: <IoMdSettings /> },
      ];
export default SidebarData;