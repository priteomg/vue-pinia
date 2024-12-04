<script setup>
import { useBookStore } from "@/stores/book";
import { useRouter } from "vue-router";
const router = useRouter();
const bookStore = useBookStore();
</script>

<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="(book, index) in bookStore.book" :key="index">
        {{ index }}.{{ book.title }} , {{ book.author }}
        <button
          @click="router.push({ name: 'book-update', params: { id: index } })"
        >
          Update
        </button>
        | <button @click="bookStore.removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
  <button @click="router.push({ name: 'book-create' })">Create Book</button>
</template>
