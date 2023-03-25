<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <!-- <RouterView/> -->
  <header>

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name:'todo'}">TodoList</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/my">My</RouterLink> -->
      </nav>
    </div>
  </header>
  <main>
     <RouterView />
  </main>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
header {
  /* line-height: 1.5;
  max-height: 100vh; */
  height: 70px;
  line-height: 70px;
  background-color: #b8d7f3;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */
main{
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
  min-height: 70vh;
  border-radius: 4px;
}

/* nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
} */

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
