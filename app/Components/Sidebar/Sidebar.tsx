"use client"

import { useParams, usePathname } from "next/navigation"
import { useContext, useState } from "react"
import IconHome from "@/public/Images/Menu-icon-home.svg"
import IconNews from "@/public/Images/Menu-icon-news.svg"
import IconShop from "@/public/Images/Menu-icon-shop.svg"
import IconGroups from "@/public/Images/Menu-icon-groups.svg"
import IconMember from "@/public/Images/Menu-icon-members.svg"
import IconCourses from "@/public/Images/Menu-icon-courses.svg"
import IconEvents from "@/public/Images/Menu-icon-events.svg"
import IconFaqs from "@/public/Images/Menu-icon-faqs.svg"
import IconReport from "@/public/Images/Menu-icon-report.svg"
import SidebarProvider, { sidebarContext } from "../SidebarProvider"
import { useTheme } from "../ThemeProvider"
import Link from "next/link"
import Image from "next/image"



const Sidebar = () => {

  const menuItems = [
    { href: "/", icon: IconHome, label: "Home" },
    { href: "/Pages/News", icon: IconNews, label: "News" },
    { href: "/Pages/Shop", icon: IconShop, label: "Shop" },
    { href: "/Pages/Groups", icon: IconGroups, label: "Groups" },
    { href: "/Pages/Members", icon: IconMember, label: "Members" },
    { href: "/Pages/Courses", icon: IconCourses, label: "Courses" },
    { href: "/Pages/Events", icon: IconEvents, label: "Events" },
  ];

  const { isCollapsed, toggleSidebar } = useContext(sidebarContext);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const [showFaqModal, setShowFaqModal] = useState<boolean>(false);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);

  return (
    <div className={`
      fixed top-0 left-0 h-screen bg-body border-r border-gray-600 transition-all duration-300 z-10
      ${isCollapsed ? "w-0 md:w-[81px] opacity-0 md:opacity-100" : "w-[60px] md:w-[170px] opacity-100"}
    `}
    >
      <div className="menus pt-30 px-3 flex flex-col gap-3">
        {menuItems.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative group flex gap-4 items-center py-2 md:py-3 ps-1.5 md:ps-4 rounded-md transition-all duration-300 hover:bg-gray-500
            ${pathname === href ? "bg-gray-500" : ""}`}
          >
            <Image
              src={icon}
              alt={label}
              width={24}
              height={24}
              className={theme === "light" ? "invert" : ""}
            />
            {!isCollapsed && <h2 className="clash-font hidden md:block">{label}</h2>}
            {isCollapsed && (
              <span className="absolute left-[81px] top-1/2 -translate-y-1/2 bg-white text-black text-md px-4 py-1 rounded-md
              opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30">
                {label}
              </span>
            )}
          </Link>
        ))}

        {/* Faqs */}
        <button
          onClick={() => setShowFaqModal(true)}
          className={`relative group hidden md:flex gap-4 items-center py-3 ps-4 rounded-md transition-all duration-300 hover:bg-gray-500 cursor-pointer`}
        >
          <Image
            src={IconFaqs}
            alt="IconFaqs"
            width={24}
            height={24}
            className={theme === "light" ? "invert" : ""}
          />
          {!isCollapsed && <h2 className="clash-font hidden md:block">FAQS</h2>}
          {isCollapsed && (
            <span className="absolute left-[81px] top-1/2 -translate-y-1/2 bg-white text-black text-md px-4 py-1 rounded-md
            opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30">
              FAQS
            </span>
          )}
        </button>

        {/* Show modal */}

        {/* Report */}
        <button
          onClick={() => setShowReportModal(true)}
          className={`relative group hidden md:flex gap-4 items-center py-3 ps-4 rounded-md transition-all duration-300 hover:bg-gray-500 cursor-pointer`}
        >
          <Image
            src={IconReport}
            alt="IconReport"
            width={24}
            height={24}
            className={theme === "light" ? "invert" : ""}
          />
          {!isCollapsed && <h2 className="clash-font hidden md:block">Report</h2>}
          {isCollapsed && (
            <span className="absolute left-[81px] top-1/2 -translate-y-1/2 bg-white text-black text-md px-4 py-1 rounded-md
            opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30">
              Report
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default Sidebar