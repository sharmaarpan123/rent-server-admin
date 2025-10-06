import ShopOwnerDashboard from "./Dashboard";
import ShopOwnerShops from "./Shops";
import ShopOwnerQueries from "./Queries";
import ShopOwnerProfile from "./Profile";

export const shopOwnerRoutes = [
  { path: "/shop-owner/dashboard", component: <ShopOwnerDashboard />, title: "Dashboard" },
  { path: "/shop-owner/shops", component: <ShopOwnerShops />, title: "Shops" },
  { path: "/shop-owner/queries", component: <ShopOwnerQueries />, title: "Queries" },
  { path: "/shop-owner/profile", component: <ShopOwnerProfile />, title: "Profile" },
];
