<script setup lang="ts"></script>

<template>
  <main class="min-h-screen p-5 flex justify-center items-center bg-cream">
    <slot></slot>
  </main>
  <footer class="fixed text-center w-full bottom-2">
    <p class="font-semibold text-verydarkblue">
      Made by
      <a href="https://github.com/deviate-team" target="_blank">Deviate Team</a
      >❤️
    </p>
  </footer>
</template>
