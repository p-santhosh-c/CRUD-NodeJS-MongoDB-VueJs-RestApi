import { createRouter, createWebHistory } from "vue-router";
import List from "../components/List.vue";
import Add from "../components/Add.vue";
import Edit from "../components/Edit.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/edit/:id/e",
    name: "Edit",
    component: Edit,
    params: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
