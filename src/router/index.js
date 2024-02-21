import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/ConnectUs",
    name: "ConnectUs",
    component: () => import("../views/ConnectUs.vue"),
  },
  {
    path: "/ProfilePersonly",
    name: "ProfilePersonly",
    component: () => import("../views/ProfilePersonly.vue"),
  },
  {
    path: "/SettingsVue",
    name: "SettingsVue",
    component: () => import("../views/SettingsVue.vue"),
  },
  {
    path: "/EditProfile",
    name: "EditProfile",
    component: () => import("../views/EditProfile.vue"),
  },
  {
    path: "/MobileNumber",
    name: "MobileNumber",
    component: () => import("../views/MobileNumber.vue"),
  },
  {
    path: "/ActivationCode",
    name: "ActivationCode",
    component: () => import("../views/ActivationCode.vue"),
  },
  {
    path: "/ChangeEmail",
    name: "ChangeEmail",
    component: () => import("../views/ChangeEmail.vue"),
  },
  {
    path: "/ChangePassword",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
  },
  {
    path: "/NotificationsVue",
    name: "NotificationsVue",
    component: () => import("../views/NotificationsVue.vue"),
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: () => import("../views/CreateAccount.vue"),
  },
  {
    path: "/ActivationcodeTwo",
    name: "ActivationcodeTwo",
    component: () => import("../views/ActivationcodeTwo.vue"),
  },
  {
    path: "/ChangeNumber",
    name: "ChangeNumber",
    component: () => import("../views/ChangeNumber.vue"),
  },
  {
    path: "/LoginVue",
    name: "LoginVue",
    component: () => import("../views/LoginVue.vue"),
  },
  {
    path: "/RecoveryPassord",
    name: "RecoveryPassord",
    component: () => import("../views/RecoveryPassord.vue"),
  },
  {
    path: "/RecoverypasswordTwo",
    name: "RecoverypasswordTwo",
    component: () => import("../views/RecoverypasswordTwo.vue"),
  },
  {
    path: "/RecoverypasswordThree",
    name: "RecoverypasswordThree",
    component: () => import("../views/RecoverypasswordThree.vue"),
  },
  {
    path: "/PortfolioVue",
    name: "PortfolioVue",
    component: () => import("../views/PortfolioVue.vue"),
  },
  {
    path: "/MyRequests",
    name: "MyRequests",
    component: () => import("../views/MyRequests.vue"),
  },
  {
    path: "/OrderDetails",
    name: "OrderDetails",
    component: () => import("../views/OrderDetails.vue"),
  },
  {
    path: "/OrderDetailstwo",
    name: "OrderDetailstwo",
    component: () => import("../views/OrderDetailstwo.vue"),
  },
  {
    path: "/CarDetails",
    name: "CarDetails",
    component: () => import("../views/CarDetails.vue"),
  },
  {
    path: "/CardEvaluation",
    name: "CardEvaluation",
    component: () => import("../views/CardEvaluation.vue"),
  },
  {
    path: "/RentalRequest",
    name: "RentalRequest",
    component: () => import("../views/RentalRequest.vue"),
  },
  {
    path: "/LuxuryCars",
    name: "LuxuryCars",
    component: () => import("../views/LuxuryCars.vue"),
  },
  {
    path: "/NotificationsContent",
    name: "NotificationsContent",
    component: () => import("../views/NotificationsContent.vue"),
  },
  {
    path: "/ComplaintsSuggestions",
    name: "ComplaintsSuggestions",
    component: () => import("../views/ComplaintsSuggestions.vue"),
  },
  {
    path: "/ConditionsVue",
    name: "ConditionsVue",
    component: () => import("../views/ConditionsVue.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
