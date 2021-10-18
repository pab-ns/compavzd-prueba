import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      login: false,
    },
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import("../views/Course.vue"),
  },
  {
    path: "/info",
    name: "CourseTable",
    component: () => import("../views/Information.vue"),
  },
  {
    path: "/info/agregar",
    name: "CourseAdd",
    component: () => import("../views/CourseAdd.vue"),
  },
  {
    path: "/info/:id",
    name: "CourseEdit",
    component: () => import("../views/CourseEdit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// guard
// import Store para usar state
router.beforeEach((to, from, next) => {
  if (to.meta.login == true) {
    if (Store.state.loginModule.currentUser) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
