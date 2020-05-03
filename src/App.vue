<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
    <div></div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #181718;
  color: white;
}

#nav {
  padding: 30px;
  background-color: #2c3e50;
  padding-bottom: 60px;
}

#nav a {
  font-weight: bold;
  color: #eeeeee;
  font-size: 18px;
  margin-left: 20px;
}

#nav .toRight{
  float: right;
}

.brand{
  float: left;
}
.brand span{
  font-size: 30px;
}
</style>
