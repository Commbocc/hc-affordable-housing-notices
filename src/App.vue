<script setup lang="ts">
import { notices, fetchNotices } from "./lib/notices";
import Notice from "./components/Notice.vue";

fetchNotices();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid";
</script>

<template>
  <div v-if="notices.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Notice />
  </article>
</template>
