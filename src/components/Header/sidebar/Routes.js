import Notification from "../../icons/svg/Notification.jsx";
import DashboardIcon from "./icons/DashBoardIcon.jsx";
import ManageUserIcons from "./icons/ManangeUserIcons.jsx";
import NotificationNavIcon from "./icons/NotificationNavIcon.jsx";
import QueryNavIcons from "./icons/QueryNavIcons.jsx";
import ShopsNavIcon from "./icons/ShopsNavIcon.jsx";

export const commonItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/manage-user",
    name: "Users",
    icon: ManageUserIcons,
  },
  {
    path: "/manage-shops",
    name: "Shops",
    icon: ShopsNavIcon,
  },
  {
    path: "/manage-query",
    name: "Queries",
    icon: QueryNavIcons,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon:  NotificationNavIcon,
  },
];
