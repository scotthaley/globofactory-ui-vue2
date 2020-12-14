<template>
  <div id="app" class="bg-blue-light text-white flex flex-col">
    <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/molecules/Header";
export default {
  components: {Header}
}
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url('./assets/fonts/Roboto-Light.ttf') format("truetype");
  font-weight: 200;
}
</style>

<style>
html, body {
  height: 100%;
}

#app {
  font-family: "Roboto", serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
