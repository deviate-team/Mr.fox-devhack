<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <main class="container mx-auto min-h-screen p-5 mt-[5.75rem]">
    <slot></slot>
  </main>
</template>
