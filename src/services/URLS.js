export default {
  API_URL: import.meta.env.VITE_APP_API_URL,

  // ADMIN auth
  LOGIN_ADMIN: "/api/v1/admin/login",
  FORGET_PASSWORD_ADMIN: "/api/v1/admin/forgot",
  RESET_PASSWORD: "/api/v1/admin/reset",
  CHANGE_PASSWORD: "/api/v1/admin/change-password",

  DASHBOARD: "/api/v1/admin/dashboard",

  //    USER
  USER_LIST: "/api/v1/admin/user-list",
  USER_ADD: "/api/v1/admin/manual-user",
  GET_USER_BY_ID: "/api/v1/admin/view",
  BLOCK_USER: "/api/v1/admin/block/",

  // queries

  QUERIES_LIST: "/api/v1/admin/query-list",

  // shops manage

  SHOPS_LIST: "/api/v1/admin/shop-list",
  SHOP_ADD: "/api/v1/admin/shop-add",
  SHOP_VIEW: "/api/v1/admin/shop-view",
  SHOP_DELETE: "/api/v1/admin/shop-delete",
  SHOP_EDIT: "/api/v1/admin/shop-edit",
  SHOP_VISITOR_LISTING: "/api/v1/admin/shop-visitors-list",

  // not used yet

  SCRAPPER_URL: "http://127.0.0.1:5000/fetch-image",
  LOGIN_SELLER: "auth/seller/singIn",
  ME_QUERY: "admin/me",
  SELLER_ME_QUERY: "seller/me",
  LOG_OUT: "admin/logout",
  LOG_OUT_AS_SELLER: "seller/logout",

  CHANGE_PASSWORD_AS_SELLER: "auth/seller/changePassword",
  ADMIN_UPDATE: "admin/editAdmin",
  GET_ADMIN_BY_ID: "/admin/getUserById/",

  // dashboard

  AGENCY_AND_MED_DASHBOARD: "subAdmin/dashboard",

  // QUERIES_LIST

  // UPLOAD FILE

  UPLOAD_FILE: "/fileUpload",

  // add plat form

  ADD_PLATFORM: "/admin/platForm/add",
  PLATFORM_LIST: "/admin/platForm/getWithFilters",
  PLATFORM_BY_ID: "/admin/platForm/getById/",
  UPDATE_PLATFORM: "/admin/platForm/edit",
  STATUS_UPDATE_PLATFORM: "/admin/platForm/updateStatus",
  // DEAL CATEGORY
  ADD_DEAL_CATEGORY: "/admin/dealCategory/add",
  DEAL_CATEGORY_LIST: "/admin/dealCategory/getAllDealCategories",
  DEAL_CATEGORY_BY_ID: "/admin/dealCategory/getById/",
  UPDATE_DEAL_CATEGORY: "/admin/dealCategory/edit",
  UPDATE_STATUS_DEAL_CATEGORY: "/admin/dealCategory/updateStatus",
  // Brand
  ADD_BRAND: "/admin/brand/add",
  BRAND_LIST: "/admin/brand/getAllWithFilters",
  BRAND_BY_ID: "/admin/brand/getById/",
  UPDATE_BRAND: "/admin/brand/edit",
  BRAND_UPDATE_STATUS: "/admin/brand/updateStatus",

  // deal

  ADD_DEAL: "/admin/deal/add",
  BULK_ADD_DEAL: "admin/deal/bulk-add",
  EDIT_DEAL: "/admin/deal/edit",
  CLONE_DEAL: "/subAdmin/deal/clone",
  GET_DEAL_VIEW: "/admin/deal/detail/",
  MY_AGENCY_DEAL_DETAIL_AS_MED: "/subAdmin/myAgencyDealAsMed/detail/",
  MY_MED_DEALS_AS_AGENCY: "subAdmin/myMedDealsAsAgency/getWithFilters",
  DEALS_LIST: "/admin/deal/all/withFilters",
  MY_SELLER_DEALS_LIST: "/seller/getSellerDeals",
  MY_SELLER_DEALS_LIST_AS_AGENCY: "/admin/seller/getSellerDeals",
  REMOVE_DEAL_FROM_SELLER: "/admin/seller/removeSellerDeal",
  MY_AGENCY_DEALS_AS_MED: "subAdmin/myAgencyDealAsMed/getWithFilters",
  DEAL_BY_BRAND_ID: "/admin/deal/getDealWithBrandId",
  DEAL_UPDATE_PAYMENT_STATUS: "/admin/deal/updatePaymentStatus",
  DEAL_UPDATE_STATUS: "/admin/deal/updateStatus",
  ALL_DEALS: "/admin/deal/all/allDeals",
  My_DEAL_AS_MED: "subAdmin/myDealsAsMed/getWithFilters",

  // seller
  SELLER_ORDER_LIST: "/seller/orders",
  SELLER_AGENCIES_LIST: "/seller/agenciesList",

  // orders //
  ORDER_LIST: "/admin/orders/all", // as agency
  ORDER_LIST_OF_MED_AS_AGENCY: "/admin/ordersOfMedAsAgency/all",
  MY_ORDER_LIST_MED: "/admin/ordersOfMedAsMed/all",
  ACCEPT_REJECT_ORDER: "admin/order/acceptRejectOrder",
  PAYMENT_STATUS_CHANGE: "admin/order/paymentStatusUpdate",
  BULK_PAYMENT_STATUS_CHANGE: "admin/order/bulkPaymentStatusUpdate",

  // poster
  POSTER_LIST: "/admin/poster/getAllPosters",
  POSTER_ADD: "/admin/poster/add",
  POSTER_EDIT: "/admin/poster/edit",
  POSTER_STATUS_CHANGE: "/admin/poster/statusChange",
  POSTER_DELETE: "/admin/poster/delete",
  POSTER_GET_BY_ID: "/admin/poster/getById/",

  // notification

  SEND_NOTIFICATION: "/admin/notification/send",

  // push notification

  GET_ALL_NOTIFICATIONS: "/commonApi/getAllNotifications",

  //scrapper

  PARSE_HTML: "/scrapper/parseHtml",

  //  SELLER
  SELLER_LIST: "/admin/seller/getAllWithFilters",
  AGENCY_SELLER_LIST: "/admin/seller/agency/getAllWithFilters",
  GET_SELLER_BY_ID: "/admin/seller/getById",
  ADD_SELLER: "/admin/seller/add",
  UPDATE_SELLER: "/admin/add/subAdmin",
  LINKED_SELLER_TO_ADMIN: "/admin/seller/link",

  //  subAdmin

  SUB_ADMIN_LIST: "/admin/subAdmin/getAllWithFilters",
  GET_ADMIN_BY_ID: "/admin/subAdmin/getById/",
  ADD_SUB_ADMIN: "/admin/add/subAdmin",
  UPDATE_SUB_ADMIN: "/admin/update/subAdmin",
  CHECK_ADMIN_USER_NAME_EXISTS: "/admin/isUserNameExists",
  MANAGE_ADMIN_SUB_ADMIN_RELATION: "/admin/manageAdminSubAdminRelation",
  LINKED_SUB_ADMIN: "/admin/linkedSubAdmin",

  // ADMINS_MODULES

  MODULES_LIST: "/admin/subAdminModule/getAllWithFilters",
  ADD_MODULE: "/admin/add/subAdminModule",
  GET_MODULE_BY_ID: "/admin/subAdminModule/getById/",
  UPDATE_MODULE: "/admin/update/subAdminModule",

  ////////////////////////////////// this api are already imported at some where so no time remove that other wise it will give errors

  USER_STATUS_CHANGE: "/admin/user/updateStatus",

  UPDATE_USER: "/admin/user/updateUser",
  // ADD_USER: "/store/adduser",
  // DELETE_USER: "/store/removeuser",

  // service provider
  SERVICE_PROVIDERS_LIST: "/store/vendors",
  SERVICE_PROVIDER_VIEW: "/store/vendor/view/",
  ADD_SERVICE_PROVIDER: "/store/addvendor",
  UPDATE_SERVICE_PROVIDER: "store/updatevendor",
  DELETE_PROVIDER: "/store/archivevendor",
  STATUS_CHANGE_SERVICE_PROVIDER: "/store/vendors/updatestatus/all",

  // service category

  SERVICE_CATEGORY_LIST: "/category/viewallcategory",
  ADD_SERVICE_CATEGORY: "/category/add",
  UPDATE_SERVICE_CATEGORY: "/category/update",
  DELETE_SERVICE_CATEGORY: "/category/remove",
  VIEW_SERVICE_CATEGORY: "/category/view/",
};
