import Login from "./AuthPages/Login/Index";
import Otp from "./AuthPages/Otp/Index";
import ForgotPassword from "./AuthPages/forgotPassword/Index";
import ResetPassword from "../components/Auth/ResetPassword";
import PrivacyPolicy from "./PublicPages/privacyPolicy/PrivacyPolicy";
import Accounting from "./SideTabPages/Accounting";
import AdminModules from "./SideTabPages/AdminModules";
import AddEditModule from "./SideTabPages/AdminModules/add";
import Brand from "./SideTabPages/Brand";
import AddEditBrand from "./SideTabPages/Brand/add";
import BrandDetails from "./SideTabPages/Brand/detail";
import ContentPage from "./SideTabPages/ContentPages";
import AddContentPage from "./SideTabPages/ContentPages/add";
import Dashboard from "./SideTabPages/Dashboard";
import MyAgencyDealsAsMed from "./SideTabPages/DealManagement/MyAgencyDeals";
import MyAgencyDealDetailsAsMed from "./SideTabPages/DealManagement/MyAgencyDeals/detail";
import DealManagement from "./SideTabPages/DealManagement/MyDealsAsAgency";
import AddEditDeal from "./SideTabPages/DealManagement/MyDealsAsAgency/add";
import AddBulkDeal from "./SideTabPages/DealManagement/MyDealsAsAgency/bulkAdd/Index";
import DealDetails from "./SideTabPages/DealManagement/MyDealsAsAgency/detail";
import MyDealsAsMed from "./SideTabPages/DealManagement/MyDealsAsMed";
import MyDealsDetailsAsMed from "./SideTabPages/DealManagement/MyDealsAsMed/detail";
import MyMedDealsAsAgency from "./SideTabPages/DealManagement/MyMediatorDeals";
import Earnings from "./SideTabPages/DealManagement/MyMediatorDeals/Earnings";
import Faq from "./SideTabPages/Faq";
import AddFaq from "./SideTabPages/Faq/add";
import Help from "./SideTabPages/Help";
import HelpDetail from "./SideTabPages/Help/detail";
import ManageCommssions from "./SideTabPages/ManageCommissions";
import ManageServiceCategory from "./SideTabPages/ManageServiceCategory";
import AddEditServiceCategory from "./SideTabPages/ManageServiceCategory/Add";
import ManageServiceDetail from "./SideTabPages/ManageServiceCategory/Detail";
import ServiceProviderRequest from "./SideTabPages/ManageServiceProvider/NewRequest";
import RegisterServiceProvider from "./SideTabPages/ManageServiceProvider/Register";
import AddNewServiceProvider from "./SideTabPages/ManageServiceProvider/Register/Add";
import ServiceProviderDetail from "./SideTabPages/ManageServiceProvider/detail";
import ManageUser from "./SideTabPages/ManageUser";
import AddEditUser from "./SideTabPages/ManageUser/Add";
import UserDetail from "./SideTabPages/ManageUser/detail";
import NotificationManagement from "./SideTabPages/NotificationMangement";
import Notification from "./SideTabPages/Notifications";
import MyMedOrdersAsAgency from "./SideTabPages/OrderMangement/MyMedOrdersAsAgency";
import MyOrderAsAgency from "./SideTabPages/OrderMangement/MyOrderAsAgency";
import MyOrderAsMed from "./SideTabPages/OrderMangement/MyOrderAsMed";
import PlatForm from "./SideTabPages/PlatForm";
import AddPlatForm from "./SideTabPages/PlatForm/add";
import PlatFormDetail from "./SideTabPages/PlatForm/detail";
import Poster from "./SideTabPages/Poster";
import AddEditPoster from "./SideTabPages/Poster/add";
import PosterDetails from "./SideTabPages/Poster/detail";
import Promocode from "./SideTabPages/Promocode";
import AddPromoCode from "./SideTabPages/Promocode/add";
import PromoCodeDetail from "./SideTabPages/Promocode/detail";
import Sellers from "./SideTabPages/Seller";
import AddDealToSeller from "./SideTabPages/Seller/AddDealToSeller";
import LinkedSeller from "./SideTabPages/Seller/LinkedSeller";
import AddEditSeller from "./SideTabPages/Seller/add";
import ViewSeller from "./SideTabPages/Seller/viewDetails";
import Settings from "./SideTabPages/Settings";
import EditProfile from "./SideTabPages/Settings/EditProfile";
import ManagePassword from "./SideTabPages/Settings/ManagePassword";
import SystemAccess from "./SideTabPages/SystemAccess";
import LinkedSubAdmin from "./SideTabPages/SystemAccess/LinkedMed";
import AddSubAdmin from "./SideTabPages/SystemAccess/add";
import QueryManagement from "./SideTabPages/QueryManagement";
import ShopManagement from "./SideTabPages/ShopManagement";
import AddEditShops from "./SideTabPages/ShopManagement/add";
import ShopDetails from "./SideTabPages/ShopManagement/detail";
export const publicRoutes = [
  { path: "privacy-policy", component: <PrivacyPolicy /> },
];

export const routes = [
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgotPassword /> },
  { path: "/otp", component: <Otp /> },
  { path: "/resetPassword", component: <ResetPassword /> },
];

export const privateRoutes = [
  {
    path: "privacy-policy",
    component: <PrivacyPolicy />,
    title: "Privacy Policy",
  },
  { path: "/dashboard", component: <Dashboard />, title: "dashboard" },
  { path: "/manage-query", component: <QueryManagement />, title: "queries" },
  { path: "/manage-user", component: <ManageUser />, title: "users" },
  { path: "/manage-user/add", component: <AddEditUser />, title: "adUser" },
  {
    path: "/manage-user/edit/:id",
    component: <AddEditUser />,
    title: "editUser",
  },
  {
    path: "/manage-user/detail/:id",
    component: <UserDetail />,
    title: "userDetails",
  },
  {
    path: "/manage-shops",
    component: <ShopManagement />,
    title: "manageShops",
  },
  {
    path: "/manage-shops/add",
    component: <AddEditShops />,
    title: "addShops",
  },
  {
    path: "/manage-shops/view/:id",
    component: <ShopDetails />,
    title: "viewShops",
  },
  {
    path: "/manage-shops/edit/:id",
    component: <AddEditShops />,
    title: "editShops",
  },
  {
    path: "/settings/edit-profile",
    component: <EditProfile />,
    title: "editProfile",
  },
  {
    path: "/settings/password",
    component: <ManagePassword />,
    title: "managePassword",
  },
   {
    path: "/notifications",
    component: <Notification />,
    title: "notifications",
  },

  // not used yet this /////////////////******************* */
  { path: "/platform", component: <PlatForm />, title: "Platform" },
  { path: "/platform/add", component: <AddPlatForm />, title: "Add Platform" },
  {
    path: "/platform/edit/:id",
    component: <AddPlatForm />,
    title: "Edit Platform",
  },
  {
    path: "/platform/details/:id",
    component: <PlatFormDetail />,
    title: "Platform Details",
  },

  { path: "/brand", component: <Brand />, title: "Brands" },
  { path: "/brand/add", component: <AddEditBrand />, title: "Add Brand" },
  { path: "/brand/edit/:id", component: <AddEditBrand />, title: "Edit Brand" },
  {
    path: "/brand/details/:id",
    component: <BrandDetails />,
    title: "Brand Details",
  },
  { path: "/poster", component: <Poster />, title: "Banners" },
  { path: "/poster/add", component: <AddEditPoster />, title: "Add Banner" },
  {
    path: "/poster/edit/:id",
    component: <AddEditPoster />,
    title: "Edit Banner",
  },
  {
    path: "/poster/details/:id",
    component: <PosterDetails />,
    title: "Banner Details",
  },
  {
    path: "/myDealsAsAgency",
    component: <DealManagement />,
    title: "My Deals As Agency",
  },
  {
    path: "/myMedDealsAsAgency",
    component: <MyMedDealsAsAgency />,
    title: "My Med Deals As Agency",
  },

  { path: "/deal/add", component: <AddEditDeal />, title: "Add Deal" },
  {
    path: "/deal/bulk-add",
    component: <AddBulkDeal />,
    title: "Add Bulk Deals",
  },
  { path: "/deal/edit/:id", component: <AddEditDeal />, title: "Edit Deal" },
  {
    path: "/deal/details/:id",
    component: <DealDetails />,
    title: "Deal Details As Agency",
  },
  {
    path: "/myAgencyDealsAsMed",
    component: <MyAgencyDealsAsMed />,
    title: "My Agency Deals As Med",
  },
  {
    path: "/myAgencyDealsAsMed/details/:id",
    component: <MyAgencyDealDetailsAsMed />,
    title: "My Agency Deal Details As Med",
  },
  {
    path: "/myDealsAsMed",
    component: <MyDealsAsMed />,
    title: "My Deal As Med",
  },
  {
    path: "/myDealsAsMed/details/:id",
    component: <MyDealsDetailsAsMed />,
    title: "My Agency Deal Details As Med",
  },

  {
    path: "/orders",
    component: <MyOrderAsAgency />,
    title: "My Orders AS Agency",
  },
  {
    path: "/myOrdersAsMed",
    component: <MyOrderAsMed />,
    title: "My  Orders as Med ",
  },
  {
    path: "/myMedOrdersAsAgency",
    component: <MyMedOrdersAsAgency />,
    title: "My Med Orders as Agency ",
  },
  {
    path: "/notification-management",
    component: <NotificationManagement />,
    title: "Notification Management",
  },
  {
    path: "/system-access",
    component: <SystemAccess />,
    title: "System Access",
  },
  {
    path: "/system-access/add",
    component: <AddSubAdmin />,
    title: "Add New Member",
  },
  {
    path: "/system-access/linkedMed",
    component: <LinkedSubAdmin />,
    title: "Linked  Mediator",
  },
  {
    path: "/system-access/edit/:adminId",
    component: <AddSubAdmin />,
    title: "Edit Sub Admin",
  },
  { path: "/modules", component: <AdminModules />, title: "Modules" },
  { path: "/module/add", component: <AddEditModule />, title: "Add Module" },
  {
    path: "/module/edit/:moduleId",
    component: <AddEditModule />,
    title: "Edit Module",
  },

 
  {
    path: "/seller",
    component: <Sellers />,
    title: "Seller",
  },
  {
    path: "/seller/add",
    component: <AddEditSeller />,
    title: "Add Seller",
  },
  {
    path: "/seller/addDeal/:sellerId",
    component: <AddDealToSeller />,
    title: "Add Seller",
  },
  {
    path: "/seller/view/:sellerId",
    component: <ViewSeller />,
    title: "Seller Deals",
  },
  {
    path: "/seller/link",
    component: <LinkedSeller />,
    title: "Edit Seller",
  },

  {
    path: "/service-provider/register",
    component: <RegisterServiceProvider />,
  },
  {
    path: "/service-provider/register/add",
    component: <AddNewServiceProvider />,
  },
  {
    path: "/service-provider/register/edit/:id",
    component: <AddNewServiceProvider />,
  },
  {
    path: "/service-provider/register/detail/:id",
    component: <ServiceProviderDetail />,
  },
  {
    path: "/service-provider/request/detail/:id",
    component: <ServiceProviderDetail />,
  },
  {
    path: "/service-provider/request",
    component: <ServiceProviderRequest />,
  },

  {
    path: "/manage-service-category",
    component: <ManageServiceCategory />,
  },
  {
    path: "/manage-service-category/detail/:id",
    component: <ManageServiceDetail />,
  },
  {
    path: "/manage-service-category/add",
    component: <AddEditServiceCategory />,
  },
  {
    path: "/manage-service-category/edit/:id",
    component: <AddEditServiceCategory />,
  },
  {
    path: "/manage-commissions",
    component: <ManageCommssions />,
  },
  {
    path: "/earnings",
    component: <Earnings />,
  },
  {
    path: "/accounting",
    component: <Accounting />,
  },
  {
    path: "/promocode",
    component: <Promocode />,
  },
  {
    path: "/promocode/add",
    component: <AddPromoCode />,
  },
  {
    path: "/promocode/detail",
    component: <PromoCodeDetail />,
  },
  {
    path: "/help",
    component: <Help />,
  },
  {
    path: "/help/detail",
    component: <HelpDetail />,
  },

  {
    path: "/settings",
    component: <Settings />,
  },

  {
    path: "/faq",
    component: <Faq />,
  },
  {
    path: "/faq/add",
    component: <AddFaq />,
  },
  {
    path: "/content-page",
    component: <ContentPage />,
  },
  {
    path: "/content-page/add",
    component: <AddContentPage />,
  },
];
