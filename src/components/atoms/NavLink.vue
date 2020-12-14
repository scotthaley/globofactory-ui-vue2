<template>
  <router-link
      :to="to"
      v-slot="{ href, navigate, isActive }"
  >
    <div class="text-black-light text-3xl flex flex-col items-center" :class="{ active: isActive }">
      <div class="spacer"></div>
      <div class="px-3 py-1 border-4 border-blue-light rounded-md border-white transition-colors duration-200 link">
        <a :href="href" @click="navigate">
          <slot></slot>
        </a>
      </div>
      <div class="spacer"></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: String
  }
}
</script>

<style scoped lang="scss">
  .spacer {
    @apply w-1 flex-grow bg-blue-light opacity-0 transition-opacity duration-200;
  }

  .active {
    .spacer {
      @apply opacity-100;
    }
    .link {
      @apply border-blue-light;
    }
    a {
      @apply text-blue-light;
    }
  }
</style>