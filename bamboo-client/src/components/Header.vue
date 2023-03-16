<script setup lang="ts">
import { ref } from "vue";
import CreateModal from "./CreateModal.vue";

const showDropdown = ref<boolean>(false);
const showModal = ref<boolean>(false);
</script>

<template>
  <nav
    class="left-0 top-0 w-full h-16 fixed shadow-md text-white bg-darkcyan flex items-center"
  >
    <div class="container mx-auto px-2">
      <div class="flex justify-between items-center">
        <div class="flex">
          <a
            href="#"
            class="text-white font-semibold rounded-lg px-2 py-2 text-2xl"
          >
            Bamboo
          </a>
        </div>
        <div class="flex">
          <button
            type="button"
            class="text-darkcyanhover bg-cream hover:bg-lightpeach focus:ring-4 focus:outline-none focus:ring-darkcyanhover font-semibold rounded-lg text-sm px-5 py-2 text-center inline-flex items-center mr-2"
            @click="showModal = true"
          >
            Create
          </button>
          <div class="relative">
            <button
              class="rounded-full overflow-hidden border-2 border-darkcyanhover w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
              @click="showDropdown = true"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="user-image"
              />
            </button>

            <div
              v-if="showDropdown"
              class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
              @click="showDropdown = false"
            ></div>
            <div
              v-if="showDropdown"
              class="absolute z-30 right-0 mt-2"
              :class="{ hidden: !showDropdown }"
            >
              <div class="bg-white rounded-2xl shadow-lg py-2 w-48">
                <a
                  href="#"
                  class="block text-verydarkblue font-semibold px-4 py-2 hover:text-darkgrayisblue"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <CreateModal v-if="showModal" @close="(show) => (showModal = show)" />
    </div>
  </nav>
</template>
