<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Home/Hero.vue';
import Projects from './components/Home/Projects.vue';
import Navbar from './components/General/Navbar.vue';
import Qualities from './components/Home/Qualities.vue';

export default defineComponent({
  name: 'App',
  components: { Hero, Projects,Navbar, Qualities },
});
</script>

<template>
  <div>
    <Navbar/>
    <Hero />
    <Projects />
    <Qualities/>
  </div>
</template>

<style scoped lang="scss"></style>
