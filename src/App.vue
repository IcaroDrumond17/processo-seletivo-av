<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins";
  font-style: normal;
  box-sizing: border-box;
}
</style>
