// import {   BriefcaseBusinessIcon, CalendarCheck2, Combine,  DollarSign,  LayoutDashboard,  NotepadText,   Settings, Users, UsersRound } from "lucide-react";

// Menu items.
export const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    // icon: LayoutDashboard, // Dashboard icon
    admin: true,
  },
  {
    title: "All Employees",
    url: "/dashboard/AllEmployees",
    // icon: Users, // Users icon
  },
  {
    title: "All Departments",
    url: "/dashboard/AllDepartments",
    // icon: Combine, // Departments icon
  },
  {
    title: "Attendance",
    url: "/dashboard/Attendance",
    // icon: CalendarCheck2, // Calendar/Attendance icon
    user: true,
  },
  {
    title: "Payroll",
    url: "/dashboard/Payroll",
    admin: true,
    // icon: DollarSign, // Payroll icon
  },
  {
    title: "Jobs",
    url: "/dashboard/Jobs",
    // icon: BriefcaseBusinessIcon, // Jobs icon
  },
  {
    title: "Candidates",
    url: "/dashboard/Candidates",
    // icon: UsersRound, // Candidates icon
  },
  {
    title: "Leaves",
    url: "/dashboard/Leaves",
    // icon: NotepadText, // Leaves icon
  },
  {
    title: "Holidays",
    url: "/dashboard/Holidays",
    admin: true
    // icon: NotepadText, // Holidays icon
  },
  {
    title: "Settings",
    url: "/dashboard/Settings",
    admin:true
    // icon: Settings, // Settings icon
  },
];