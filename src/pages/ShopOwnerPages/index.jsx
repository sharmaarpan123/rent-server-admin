import ShopOwnerDashboard from "./Dashboard";
import ShopOwnerShops from "./Shops";
import ShopOwnerQueries from "./Queries";
import ShopOwnerVisitors from "./Visitors";
import ShopOwnerProfile from "./Profile";
import ShopOwnerChat from "./Chat";

export const shopOwnerRoutes = [
  { path: "/shop-owner/dashboard", component: <ShopOwnerDashboard />, title: "Dashboard" },
  { path: "/shop-owner/shops", component: <ShopOwnerShops />, title: "Shops" },
  { path: "/shop-owner/queries", component: <ShopOwnerQueries />, title: "Queries" },
  { path: "/shop-owner/visitors", component: <ShopOwnerVisitors />, title: "Visitors" },
  { path: "/shop-owner/chat", component: <ShopOwnerChat />, title: "Chat" },
  { path: "/shop-owner/profile", component: <ShopOwnerProfile />, title: "Profile" },
];
