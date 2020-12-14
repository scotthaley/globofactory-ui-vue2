<template>
  <div class="bg-white shadow-lg flex">
    <div class="p-6 flex-grow">
      <Logo/>
    </div>
    <div class="flex pr-4">
      <NavLink to="/market">Market</NavLink>
      <NavLink to="/wiki">Wiki</NavLink>
      <NavLink to="/stock">Stock</NavLink>
      <NavLink to="/community">Community</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
export default {
name: "Header",
  components: {NavLink, Logo}
}
</script>

<style scoped>

</style>