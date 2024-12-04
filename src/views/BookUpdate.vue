<script setup>
import { useBookStore } from "@/stores/book";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const bookStore = useBookStore();

const bookData = reactive({
  title: "",
  author: "",
});

const mode = ref("create");
const bookIndex = ref(-1);

const route = useRoute();

onMounted(() => {
  if (route.name === "book-update") {
    mode.value = "update";
    bookIndex.value = parseInt(route.params.id);
    bookData.title = bookStore.book[bookIndex.value].title;
    bookData.author = bookStore.book[bookIndex.value].author;
  }
});

const updateBook = () => {
  console.log(bookData);
  if (bookData.title !== "" || bookData.author !== "") {
    if (mode.value === "create") {
      bookStore.addBook(bookData);
    } else {
      bookStore.updateBook(bookIndex.value, bookData);
    }
    router.push({ name: "book-list" });
  }
};
</script>

<template>
  <h1>BookUpdate</h1>
  <div>
    Title:
    <input type="text" name="title" v-model="bookData.title" />
  </div>
  <div>
    Author:
    <input type="text" name="author" v-model="bookData.author" />
  </div>
  <button @click="updateBook">
    {{ mode === "create" ? "Add Book" : "Update Book" }}
  </button>
  <button @click="router.push({ name: 'book-list' })">Back</button>
</template>
