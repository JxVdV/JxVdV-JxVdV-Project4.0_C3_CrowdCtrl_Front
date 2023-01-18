<template>
  <div class="bg-black bg-opacity-90">
    <nav
      class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-100 md:text-2xl">
          <img src="@/assets/logo.png" alt="logo" class="h-10" />
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <router-link
          to="/"
          class="font-bold text-gray-100 hover:text-primary-orange"
        >
          Home
        </router-link>
        <router-link
          to="/api"
          class="font-bold text-gray-100 hover:text-primary-orange"
        >
          Api
        </router-link>
        <router-link
          to="/shouldRedirectToApi"
          class="font-bold text-gray-100 hover:text-primary-orange"
        >
          Redirect
        </router-link>
        <router-link
          to="/about"
          class="font-bold text-gray-100 hover:text-primary-orange"
          >About
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
