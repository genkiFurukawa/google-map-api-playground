<template>
  <div>
    <nav>
      <router-link to="/">
        Home
      </router-link> | <router-link to="/about">
        About
      </router-link> |
      <router-link to="/map">
        Map
      </router-link>
    </nav>
    <!-- URLのidごとに表示を変えるためのタグ -->
    <div id="app-content">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#app-content {
    height: 85vh;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
