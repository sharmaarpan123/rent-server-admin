import { makeQueryFromData } from "../utilities/utilities";
import Axios from "./Axios";
import API_URL from "./URLS";
// AUTH ADMIN
export const LOGIN_ADMIN = (data) => Axios.post(API_URL.LOGIN_ADMIN, data);
export const FORGET_PASSWORD_ADMIN = (data) =>
  Axios.post(API_URL.FORGET_PASSWORD_ADMIN, data);
export const RESET_PASSWORD = (data) =>
  Axios.post(API_URL.RESET_PASSWORD, data);
export const CHANGE_PASSWORD = (data) =>
  Axios.post(API_URL.CHANGE_PASSWORD, data);

// DASHBOARD

export const DASHBOARD = (data) => Axios.post(API_URL.DASHBOARD, data);

// query Management

export const QUERIES_LIST = (data) => Axios.post(API_URL.QUERIES_LIST, data);
//USERS
export const USER_LIST = (data) => Axios.post(API_URL.USER_LIST, data);
export const GET_USER_BY_ID = (data) => Axios.post(API_URL.GET_USER_BY_ID, data);
export const USER_ADD = (data) => Axios.post(API_URL.USER_ADD, data);

export const BLOCK_UNBLOCK_USER = (id) => Axios.put(API_URL.BLOCK_USER + id);

// SHOPS

export const SHOPS_LIST = (data) => Axios.post(API_URL.SHOPS_LIST, data);
export const SHOP_ADD = (data) => Axios.post(API_URL.SHOP_ADD, data);
export const SHOP_VIEW = (data) => Axios.post(API_URL.SHOP_VIEW, data);
export const SHOP_DELETE = (data) => Axios.post(API_URL.SHOP_DELETE, data);
export const SHOP_EDIT = (data) => Axios.post(API_URL.SHOP_EDIT, data);
export const SHOP_VISITOR_LISTING = (data) => Axios.post(API_URL.SHOP_VISITOR_LISTING, data);

////////////////////////////////// this api are already imported at some where so no time remove that other wise it will give errors

export const LOGIN_SELLER = (data) => Axios.post(API_URL.LOGIN_SELLER, data);
export const ME_QUERY = (data) => Axios.post(API_URL.ME_QUERY, data);
export const SELLER_ME_QUERY = (data) =>
  Axios.post(API_URL.SELLER_ME_QUERY, data);
export const LOG_OUT = (data) => Axios.post(API_URL.LOG_OUT, data);
export const LOG_OUT_AS_SELLER = (data) =>
  Axios.post(API_URL.LOG_OUT_AS_SELLER, data);

export const CHANGE_PASSWORD_AS_SELLER = (data) =>
  Axios.post(API_URL.CHANGE_PASSWORD_AS_SELLER, data);

// upload file
export const UPLOAD_FILE = (data) => Axios.post(API_URL.UPLOAD_FILE, data);

// dasbhoard

export const AGENCY_AND_MED_DASHBOARD = (data) =>
  Axios.post(API_URL.AGENCY_AND_MED_DASHBOARD, data);

// PLATFORM

export const ADD_PLATFORM = (data) => Axios.post(API_URL.ADD_PLATFORM, data);
export const PLATFORM_LIST = (data) =>
  Axios.get(API_URL.PLATFORM_LIST + makeQueryFromData(data));
export const PLATFORM_BY_ID = (data) =>
  Axios.get(API_URL.PLATFORM_BY_ID + data);
export const UPDATE_PLATFORM = (data) =>
  Axios.post(API_URL.UPDATE_PLATFORM, data);
export const STATUS_UPDATE_PLATFORM = (data) =>
  Axios.post(API_URL.STATUS_UPDATE_PLATFORM, data);

// DEAL CATEGORY
export const ADD_DEAL_CATEGORY = (data) =>
  Axios.post(API_URL.ADD_DEAL_CATEGORY, data);
export const DEAL_CATEGORY_LIST = (data) =>
  Axios.get(API_URL.DEAL_CATEGORY_LIST + makeQueryFromData(data));
export const DEAL_CATEGORY_BY_ID = (data) =>
  Axios.get(API_URL.DEAL_CATEGORY_BY_ID + data);
export const UPDATE_DEAL_CATEGORY = (data) =>
  Axios.post(API_URL.UPDATE_DEAL_CATEGORY, data);
export const UPDATE_STATUS_DEAL_CATEGORY = (data) =>
  Axios.post(API_URL.UPDATE_STATUS_DEAL_CATEGORY, data);
export const ALL_DEALS = (data) => Axios.get(API_URL.ALL_DEALS);

// DEAL CATEGORY
export const ADD_BRAND = (data) => Axios.post(API_URL.ADD_BRAND, data);
export const BRAND_LIST = (data) => Axios.post(API_URL.BRAND_LIST, data);
export const BRAND_BY_ID = (data) => Axios.get(API_URL.BRAND_BY_ID + data);
export const UPDATE_BRAND = (data) => Axios.post(API_URL.UPDATE_BRAND, data);
export const BRAND_UPDATE_STATUS = (data) =>
  Axios.post(API_URL.BRAND_UPDATE_STATUS, data);

// DEAL

export const ADD_DEAL = (data) => Axios.post(API_URL.ADD_DEAL, data);
export const BULK_ADD_DEAL = (data) => Axios.post(API_URL.BULK_ADD_DEAL, data);
export const EDIT_DEAL = (data) => Axios.post(API_URL.EDIT_DEAL, data);
export const CLONE_DEAL = (data) => Axios.post(API_URL.CLONE_DEAL, data);

export const DEALS_LIST = (data) => Axios.post(API_URL.DEALS_LIST, data);
export const MY_SELLER_DEALS_LIST = (data) =>
  Axios.post(API_URL.MY_SELLER_DEALS_LIST, data);
export const MY_SELLER_DEALS_LIST_AS_AGENCY = (data) =>
  Axios.post(API_URL.MY_SELLER_DEALS_LIST_AS_AGENCY, data);
export const REMOVE_DEAL_FROM_SELLER = (data) =>
  Axios.post(API_URL.REMOVE_DEAL_FROM_SELLER, data);
export const MY_AGENCY_DEALS_AS_MED = (data) =>
  Axios.post(API_URL.MY_AGENCY_DEALS_AS_MED, data);
export const MY_MED_DEALS_AS_AGENCY = (data) =>
  Axios.post(API_URL.MY_MED_DEALS_AS_AGENCY, data);
export const MY_AGENCY_DEAL_DETAIL_AS_MED = (data) =>
  Axios.get(API_URL.MY_AGENCY_DEAL_DETAIL_AS_MED + data);

export const My_DEAL_AS_MED = (data) =>
  Axios.post(API_URL.My_DEAL_AS_MED, data);

export const GET_DEAL_VIEW = (data) => Axios.get(API_URL.GET_DEAL_VIEW + data);

export const DEAL_BY_BRAND_ID = (body) =>
  Axios.post(API_URL.DEAL_BY_BRAND_ID, body);
export const DEAL_UPDATE_PAYMENT_STATUS = (data) =>
  Axios.post(API_URL.DEAL_UPDATE_PAYMENT_STATUS, data);
export const DEAL_UPDATE_STATUS = (data) =>
  Axios.post(API_URL.DEAL_UPDATE_STATUS, data);
// ORDERS

export const ORDER_LIST = (data) => Axios.post(API_URL.ORDER_LIST, data);
export const SELLER_ORDER_LIST = (data) =>
  Axios.post(API_URL.SELLER_ORDER_LIST, data);
export const ORDER_LIST_OF_MED_AS_AGENCY = (data) =>
  Axios.post(API_URL.ORDER_LIST_OF_MED_AS_AGENCY, data);
export const MY_ORDER_LIST_MED = (data) =>
  Axios.post(API_URL.MY_ORDER_LIST_MED, data);
//
export const ACCEPT_REJECT_ORDER = (data) =>
  Axios.post(API_URL.ACCEPT_REJECT_ORDER, data);
export const PAYMENT_STATUS_CHANGE = (data) =>
  Axios.post(API_URL.PAYMENT_STATUS_CHANGE, data);
export const BULK_PAYMENT_STATUS_CHANGE = (data) =>
  Axios.post(API_URL.BULK_PAYMENT_STATUS_CHANGE, data);

// poster /////////

export const POSTER_LIST = (data) => Axios.post(API_URL.POSTER_LIST, data);
export const POSTER_ADD = (data) => Axios.post(API_URL.POSTER_ADD, data);
export const POSTER_EDIT = (data) => Axios.post(API_URL.POSTER_EDIT, data);
export const POSTER_STATUS_CHANGE = (data) =>
  Axios.post(API_URL.POSTER_STATUS_CHANGE, data);
export const POSTER_DELETE = (data) => Axios.post(API_URL.POSTER_DELETE, data);
export const POSTER_GET_BY_ID = (data) =>
  Axios.get(API_URL.POSTER_GET_BY_ID + data);

export const GET_ALL_NOTIFICATIONS = (data) =>
  Axios.post(API_URL.GET_ALL_NOTIFICATIONS, data);

// notification

export const SEND_NOTIFICATION = (data) =>
  Axios.post(API_URL.SEND_NOTIFICATION, data);

// SCRAPPER

export const SCRAPPER_IMAGE = (data) =>
  Axios.get(API_URL.SCRAPPER_URL + "?url=" + data);

// seller

export const GET_SELLER_BY_ID = (data) =>
  Axios.get(API_URL.GET_SELLER_BY_ID + data);

export const ADD_SELLER = (data) => Axios.post(API_URL.ADD_SELLER, data);

export const UPDATE_SELLER = (data) => Axios.post(API_URL.UPDATE_SELLER, data);

export const LINKED_SELLER_TO_ADMIN = (data) =>
  Axios.post(API_URL.LINKED_SELLER_TO_ADMIN, data);

export const SELLER_LIST = (data) => Axios.post(API_URL.SELLER_LIST, data);
export const AGENCY_SELLER_LIST = (data) =>
  Axios.post(API_URL.AGENCY_SELLER_LIST, data);

export const SELLER_AGENCIES_LIST = (data) =>
  Axios.post(API_URL.SELLER_AGENCIES_LIST, data);

// SUB_ADMINS

export const SUB_ADMIN_LIST = (data) =>
  Axios.get(API_URL.SUB_ADMIN_LIST + makeQueryFromData(data));
export const GET_ADMIN_BY_ID = (data) =>
  Axios.get(API_URL.GET_ADMIN_BY_ID + data);

export const ADD_SUB_ADMIN = (data) => Axios.post(API_URL.ADD_SUB_ADMIN, data);

export const UPDATE_SUB_ADMIN = (data) =>
  Axios.post(API_URL.UPDATE_SUB_ADMIN, data);
export const CHECK_ADMIN_USER_NAME_EXISTS = (data) =>
  Axios.post(API_URL.CHECK_ADMIN_USER_NAME_EXISTS, data);
export const MANAGE_ADMIN_SUB_ADMIN_RELATION = (data) =>
  Axios.post(API_URL.MANAGE_ADMIN_SUB_ADMIN_RELATION, data);
export const LINKED_SUB_ADMIN = (data) =>
  Axios.post(API_URL.LINKED_SUB_ADMIN, data);

// ADMINS_MODULES

export const MODULES_LIST = (data) =>
  Axios.get(API_URL.MODULES_LIST, { params: data });

export const GET_MODULE_BY_ID = (data) =>
  Axios.get(API_URL.GET_MODULE_BY_ID + data);

export const ADD_MODULE = (data) => Axios.post(API_URL.ADD_MODULE, data);

export const UPDATE_MODULE = (data) => Axios.post(API_URL.UPDATE_MODULE, data);

// user
// export const ADD_USER = (data) => Axios.post(API_URL.ADD_USER, data);

export const UPDATE_USER = (data) => Axios.post(API_URL.UPDATE_USER, data);
// export const DELETE_USER = (data) => Axios.post(API_URL.DELETE_USER, data);
export const USER_STATUS_CHANGE = (data) =>
  Axios.post(API_URL.USER_STATUS_CHANGE, data);

// service provider
export const SERVICE_PROVIDERS_LIST = (data) =>
  Axios.post(API_URL.SERVICE_PROVIDERS_LIST, data);
export const SERVICE_PROVIDER_VIEW = (data) =>
  Axios.get(API_URL.SERVICE_PROVIDER_VIEW + data);
export const ADD_SERVICE_PROVIDER = (data) =>
  Axios.post(API_URL.ADD_SERVICE_PROVIDER, data);
export const DELETE_PROVIDER = (data) =>
  Axios.post(API_URL.DELETE_PROVIDER, data);
export const UPDATE_SERVICE_PROVIDER = (data) =>
  Axios.post(API_URL.UPDATE_SERVICE_PROVIDER, data);
export const STATUS_CHANGE_SERVICE_PROVIDER = (data) =>
  Axios.post(API_URL.STATUS_CHANGE_SERVICE_PROVIDER, data);

// SERVICE CATEGORY

export const SERVICE_CATEGORY_LIST = (data) =>
  Axios.post(API_URL.SERVICE_CATEGORY_LIST, data);
export const ADD_SERVICE_CATEGORY = (data) =>
  Axios.post(API_URL.ADD_SERVICE_CATEGORY, data);
export const UPDATE_SERVICE_CATEGORY = (data) =>
  Axios.post(API_URL.UPDATE_SERVICE_CATEGORY, data);
export const DELETE_SERVICE_CATEGORY = (data) =>
  Axios.post(API_URL.DELETE_SERVICE_CATEGORY, data);
export const VIEW_SERVICE_CATEGORY = (data) =>
  Axios.get(API_URL.VIEW_SERVICE_CATEGORY + data);
