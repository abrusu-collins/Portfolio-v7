<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Home/Hero.vue';
import Projects from './components/Home/Projects.vue';
import Navbar from './components/General/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: { Hero, Projects,Navbar },
});
</script>

<template>
  <div>
    <Navbar/>
    <Hero />
    <Projects />
  </div>
</template>

<style scoped lang="scss"></style>
