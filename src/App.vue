<template>
  <!-- <div id="dev-nav">
    <router-link to="/registration">Reg</router-link> |
    <router-link to="/">Chats</router-link> |
    <router-link to="/authorization">Auth</router-link> |
    <router-link to="/chat/2">Chat</router-link>
  </div> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("assets/background.jpg");
  height: 100vh;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
