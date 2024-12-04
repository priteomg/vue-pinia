import { createRouter, createWebHistory } from "vue-router";
import BookUpdateView from "@/views/BookUpdate.vue";
import ListView from "@/views/ListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "book-list",
      component: ListView,
    },
    {
      path: "/book/create",
      name: "book-create",
      component: BookUpdateView,
    },
    {
      path: "/book/update/:id",
      name: "book-update",
      component: BookUpdateView,
    },
  ],
});

export default router;
