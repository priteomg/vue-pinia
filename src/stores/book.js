import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBookStore = defineStore("book", {
  state: () => ({
    book: [],
  }),
  actions: {
    addBook(book) {
      this.book.push(book);
    },

    removeBook(bookIndex) {
      this.book.splice(bookIndex, 1);
    },

    updateBook(bookIndex, book) {
      this.book.splice(bookIndex, 1, book);
    },
  },
});
