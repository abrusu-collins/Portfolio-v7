<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Home/Hero.vue';
import Projects from './components/Home/Projects.vue';

export default defineComponent({
  name: 'App',
  components: { Hero, Projects },
});
</script>

<template>
  <div>
    <Hero />
    <Projects />
  </div>
</template>

<style scoped lang="scss"></style>
