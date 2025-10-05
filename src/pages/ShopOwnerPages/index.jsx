import ShopOwnerDashboard from "./Dashboard";
import ShopOwnerVisitors from "./Visitors";
import ShopOwnerQueries from "./Queries";
import ShopOwnerProfile from "./Profile";

export const shopOwnerRoutes = [
  { path: "/shop-owner/dashboard", component: <ShopOwnerDashboard />, title: "Dashboard" },
  { path: "/shop-owner/visitors", component: <ShopOwnerVisitors />, title: "Visitors" },
  { path: "/shop-owner/queries", component: <ShopOwnerQueries />, title: "Queries" },
  { path: "/shop-owner/profile", component: <ShopOwnerProfile />, title: "Profile" },
];
