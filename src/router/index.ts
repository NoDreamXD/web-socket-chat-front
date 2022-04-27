import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Authorization from "@/views/Authorization.vue";
import Registration from "@/views/Registration.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/registration",
    component: () =>
    import("../views/Registration.vue"),
  },
  {
    path: "/authorization",
    component: () =>
    import("../views/Authorization.vue"),
  },
  {
    path: "/",
    component: () =>
    import("../views/Chats.vue"),
  },
  {
    path: "/chat/2",
    component: () =>
    import("../views/Chat.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
