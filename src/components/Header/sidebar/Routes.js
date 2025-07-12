import Notification from "../../icons/svg/Notification.jsx";
import DashboardIcon from "./icons/DashBoardIcon.jsx";
import ManageUserIcons from "./icons/ManangeUserIcons.jsx";
import NotificationNavIcon from "./icons/NotificationNavIcon.jsx";
import QueryNavIcons from "./icons/QueryNavIcons.jsx";
import ShopsNavIcon from "./icons/ShopsNavIcon.jsx";

export const commonItems = [
  {
    path: "/dashboard",
    name: "dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/manage-user",
    name: "users",
    icon: ManageUserIcons,
  },
  {
    path: "/manage-shops",
    name: "shops",
    icon: ShopsNavIcon,
  },
  {
    path: "/manage-query",
    name: "queries",
    icon: QueryNavIcons,
  },
  {
    path: "/notifications",
    name: "notifications",
    icon: NotificationNavIcon,
  },
];
