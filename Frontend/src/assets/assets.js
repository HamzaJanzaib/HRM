import {   BriefcaseBusinessIcon, CalendarCheck2, Combine,  DollarSign,  LayoutDashboard,  NotepadText,   Settings, Users, UsersRound } from "lucide-react";

// Menu items.
export const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "All Employees",
    url: "/dashboard/AllEmployees",
    icon: Users,
  },
  {
    title: "All Departments",
    url: "/dashboard/AllDepartments",
    icon: Combine,
  },
  {
    title: "Attendance",
    url: "/dashboard/Attendance",
    icon: CalendarCheck2,
  },
  {
    title: "Payroll",
    url: "/dashboard/Payroll",
    icon: DollarSign,
  },
  {
    title: "Jobs",
    url: "/dashboard/Jobs",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Candidates",
    url: "/dashboard/Candidates",
    icon: UsersRound,
  },
  {
    title: "Leaves",
    url: "/dashboard/Leaves",
    icon: NotepadText,
  },
  {
    title: "Holidays",
    url: "/dashboard/Holidays",
    icon: NotepadText,
  },
  {
    title: "Settings",
    url: "/dashboard/Settings",
    icon: Settings,
  },
];