<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Cuaca</router-link></li>
          <li><router-link to="/lokasi">Lokasi</router-link></li>
          <li><router-link to="/stopwatch">Stopwatch</router-link></li>
          <li><router-link to="/game">Games</router-link></li>
          <li><router-link to="/photo">Photo</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
};
</script>



<style>
body{
  background-color: #e8d7d7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px; /* Adjust the value to your desired spacing */
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(135deg, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
  padding: 20px;
  border-radius: 62px;
  background: #165a52;
  box-shadow: -18px 18px 30px #0e3833, 18px -18px 30px #1e7c71;
  z-index: 9999;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
}

router-link.active {
  background-color: rgba(255, 255, 255, 0.2);
}

router-link.active:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

</style>

