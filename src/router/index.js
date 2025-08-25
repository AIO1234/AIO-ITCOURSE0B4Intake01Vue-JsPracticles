import { createRouter, createWebHistory } from "vue-router";

<<<<<<< HEAD
// Composables
import { createRouter, createWebHistory } from 'vue-router'

// import { routes } from 'vue-router/auto-routes'
// import { components } from 'vuetify/dist/vuetify.js'

=======
>>>>>>> yasindu
const routes = [
  {
    path: "/",
    name: "home",
<<<<<<< HEAD
    components: () => import("@/pages/index.vue"),
  },
    {
    path: "/test",
    name: "test",
    components: () => import("@/pages/test.vue"),
=======
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/pages/test.vue"),
>>>>>>> yasindu
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (localStorage.getItem("vuetify:dynamic-reload")) {
      console.error("Dynamic import error, reloading page did not fix it", err);
    } else {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
